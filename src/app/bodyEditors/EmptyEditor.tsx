import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { BodyEditorProps } from "../userInterface/squares/SquareBodyTriageComponent";

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
