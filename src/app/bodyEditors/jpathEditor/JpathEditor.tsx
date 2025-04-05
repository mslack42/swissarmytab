import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useEffect, useState } from "react";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { dataService } from "@/store/services/dataService";
import { JsonTextArea } from "../../userInterface/form/JsonTextArea";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import jsonpath from "jsonpath";
import { beautify } from "../jsonEditor/functions";

export function JpathEditor(props: BodyEditorProps) {
  const panelData = useAppSelector(selectPanelData(props.id));
  const data = dataService.getData(panelData!.dataId);
  const [bodyText, setBodyText] = useState(
    data?.dataType == "text" ? data.content : ""
  );
  const [resultText, setResultText] = useState(
    "// Jpath results will display here"
  );
  const [jpath, setJpath] = useState("");

  useEffect(() => {
    dataService.updateData(panelData!.dataId!, {
      dataType: "text",
      content: bodyText,
    });
  }, [bodyText, panelData]);

  useEffect(() => {
    if (bodyText.trim().length == 0 || jpath.trim().length == 0) {
      setResultText("// Jpath results will display here");
      return;
    }
    let jsonObj;
    try {
      jsonObj = JSON.parse(bodyText);
    } catch (e) {
      setResultText("// Enter a valid json");
      return;
    }
    try {
      const resultObj = jsonpath.query(jsonObj, jpath);
      setResultText(beautify(JSON.stringify(resultObj)));
    } catch (e) {
      setResultText("// Invalid Jpath");
    }
  }, [bodyText, jpath]);

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-start gap-2">
        <label>JPath</label>
        <input
          type="text"
          className="border-white border-2 rounded-sm"
          onChange={(e) => {
            setJpath(e.currentTarget.value);
          }}
        />
      </div>
      <div className="w-full flex-grow">
        <LeftRightResizable
          left={
            <JsonTextArea
              text={bodyText}
              onTextChange={(s) => setBodyText(s)}
            />
          }
          right={<JsonTextArea text={resultText} readonly />}
        />
      </div>
    </div>
  );
}

type LeftRightResizableProps = {
  left: React.JSX.Element;
  right: React.JSX.Element;
};
function LeftRightResizable(props: LeftRightResizableProps) {
  const { left, right } = props;
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel minSize={20}>{left}</ResizablePanel>
      <ResizableHandle withHandle className="w-2 bg-transparent" />
      <ResizablePanel minSize={20}>{right}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
