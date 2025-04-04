import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useEffect, useState } from "react";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { dataService } from "@/store/services/dataService";
import { beautify, minify, escape, unescape } from "./functions";
import { JsonTextArea } from "./JsonTextArea";

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

  return (
    <div className="h-full w-full">
      <ul className="w-full h-6 flex flex-row justify-between">
        <li>
          <button onClick={() => setBodyText(beautify(bodyText))}>
            Beautify
          </button>
        </li>
        <li>
          <button onClick={() => setBodyText(minify(bodyText))}>Minify</button>
        </li>
        <li>
          <button onClick={() => setBodyText(escape(bodyText))}>Escape</button>
        </li>
        <li>
          <button onClick={() => setBodyText(unescape(bodyText))}>
            Unescape
          </button>
        </li>
      </ul>

      <JsonTextArea text={bodyText} onTextChange={(s) => setBodyText(s)} />
    </div>
  );
}
