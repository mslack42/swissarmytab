import { useAppSelector } from "@/store/hooks";
import { selectPanelData } from "@/store/slices/squaresSlice";
import { useState } from "react";
import { BodyEditorProps } from "../squares/SquareBodyTriageComponent";

export function DemoTextEditor(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id))
  const [bodyText, setBodyText] = useState("dataId: " + data?.dataId);
  
  return (
    <>
        <textarea
          defaultValue={bodyText}
          onChange={(s) => setBodyText(s.currentTarget.value)}
        ></textarea>
    </>
  );
}
