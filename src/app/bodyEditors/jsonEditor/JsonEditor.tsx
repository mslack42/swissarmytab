import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useEffect, useState } from "react";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { dataService } from "@/store/services/dataService";
import { beautify, minify, escape, unescape } from "./functions";
import { JsonTextArea } from "../../userInterface/form/JsonTextArea";

export function JsonEditor(props: BodyEditorProps) {
  const panelData = useAppSelector(selectPanelData(props.id));
  const data = dataService.getData(panelData!.dataId);
  const [bodyText, setBodyText] = useState(
    data?.dataType == "text" ? data.content : ""
  );

  useEffect(() => {
    dataService.updateData(panelData!.dataId!, {
      dataType: "text",
      content: bodyText,
    });
  }, [bodyText, panelData]);

  const ActionButton = ({
    text,
    fn,
  }: {
    text: string;
    fn: (s: string) => string;
  }) => (
    <li>
      <button
        onClick={() => setBodyText(fn(bodyText))}
        className="w-24 bg-slate-500 hover:bg-slate-300 rounded-sm"
      >
        {text}
      </button>
    </li>
  );

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <ul className="flex flex-row justify-center gap-2 m-2 md:flex-wrap">
          <ActionButton text="Beautify" fn={beautify} />
          <ActionButton text="Minify" fn={minify} />
          <ActionButton text="Escape" fn={escape} />
          <ActionButton text="Unescape" fn={unescape} />
        </ul>
      </div>
      <div className="w-full flex-grow">
        <JsonTextArea text={bodyText} onTextChange={(s) => setBodyText(s)} />
      </div>
    </div>
  );
}
