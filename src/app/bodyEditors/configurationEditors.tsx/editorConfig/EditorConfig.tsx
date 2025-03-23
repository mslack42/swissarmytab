import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { BodyEditorCard } from "./BodyEditorCard";

export function BodyEditorConfig(props: BodyEditorProps){
  const data = useAppSelector(selectPanelData(props.id))
  
  return (
    <>
        <h1>TODO: some usability controls to go here:</h1>
        <p>Configure your editors here</p>
        <ul className="flex flex-row p-2 gap-4 h-full flex-wrap justify-start overflow-y-scroll">
          {Object.keys(Editors).map((k) => <li className="border-white rounded-md border-2 h-28 w-52">
            <BodyEditorCard bodyEditorId={k as BodyEditorId}/>
          </li>)}
        </ul>
    </>
  );
}