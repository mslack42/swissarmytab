import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useEffect, useState } from "react";
import { dataService } from "@/store/services/dataService";
import { Textarea } from "@/components/ui/textarea";
import { BodyEditorProps } from "../../userInterface/squares/SquareBodyTriageComponent";

export function PlaintextEditor(props: BodyEditorProps) {
  const panelData = useAppSelector(selectPanelData(props.id));
  const data = dataService.getData(panelData!.dataId);
  const [bodyText, setBodyText] = useState(
    data?.dataType == "text" ? data.content : "",
  );

  useEffect(() => {
    dataService.updateData(panelData!.dataId!, {
      dataType: "text",
      content: bodyText,
    });
  }, [bodyText, panelData]);

  return (
    <>
      <Textarea
        className="h-full"
        defaultValue={bodyText}
        onChange={(s) => setBodyText(s.currentTarget.value)}
      ></Textarea>
    </>
  );
}
