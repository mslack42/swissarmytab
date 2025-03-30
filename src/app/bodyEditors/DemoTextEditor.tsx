import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { BodyEditorProps } from "../userInterface/squares/SquareBodyTriageComponent";

export function DemoTextEditor(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id))
  const [bodyText, setBodyText] = useState("dataId: " + data?.dataId);
  
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
