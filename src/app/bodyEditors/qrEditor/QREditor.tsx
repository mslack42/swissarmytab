import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useEffect, useRef, useState } from "react";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { dataService } from "@/store/services/dataService";
import { Textarea } from "@/components/ui/textarea";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";

export function QREditor(props: BodyEditorProps) {
  const panelData = useAppSelector(selectPanelData(props.id));
  const data = dataService.getData(panelData!.dataId);
  const [bodyText, setBodyText] = useState(
    data?.dataType == "text" ? data.content : "",
  );
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dataService.updateData(panelData!.dataId!, {
      dataType: "text",
      content: bodyText,
    });
  }, [bodyText, panelData]);

  const ActionButton = ({ text, fn }: { text: string; fn: () => void }) => (
    <li>
      <button
        onClick={fn}
        className="w-24 bg-slate-500 hover:bg-slate-300 rounded-sm"
      >
        {text}
      </button>
    </li>
  );

  const png = async () => {
    if (!qrRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(qrRef.current);
      const link = document.createElement("a");
      link.download = `${panelData?.title}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log(err);
    }
  };
  const jpeg = async () => {
    if (!qrRef.current) return;
    try {
      const dataUrl = await htmlToImage.toJpeg(qrRef.current, {
        quality: 0.95,
      });
      const link = document.createElement("a");
      link.download = `${panelData?.title}.jpeg`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log(err);
    }
  };
  const svg = async () => {
    if (!qrRef.current) return;

    const svgElement = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svgElement!);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${panelData?.title}.svg`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <Textarea
          defaultValue={bodyText}
          onChange={(s) => setBodyText(s.currentTarget.value)}
        />
      </div>
      <div className="w-full flex-grow p-2">
        <div className="h-full flex flex-row justify-center p-3">
          <div className="w-full flex-grow">
            <div className="h-min p-4 bg-white rounded-3xl">
              {bodyText.length == 0 ? (
                <p className="p-3 align-middle justify-center text-center w-full max-w-full text-black">
                  See your QR code here
                </p>
              ) : (
                <div ref={qrRef}>
                  <QRCode
                    value={bodyText}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  />
                </div>
              )}
            </div>
            {bodyText.length == 0 ? (
              <></>
            ) : (
              <ul className="flex flex-row justify-center gap-2 m-2 md:flex-wrap">
                <ActionButton text="PNG" fn={png} />
                <ActionButton text="JPEG" fn={jpeg} />
                <ActionButton text="SVG" fn={svg} />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
