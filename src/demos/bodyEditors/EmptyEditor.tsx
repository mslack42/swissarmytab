import { useAppSelector } from "@/store/hooks";
import { selectPanelData } from "@/store/slices/squaresSlice";
import { BodyEditorProps } from "../squares/SquareBodyTriageComponent";

export function EmptyEditor(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id))
  
  return (
    <>
        <h1>Pick an tool to use:</h1>
        <ul>
          <li>(Demo) Text Editor</li>
        </ul>
    </>
  );
}
