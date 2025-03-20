import { useAppSelector } from "@/store/redux/hooks";
import { DemoTextEditor } from "../../app/bodyEditors/DemoTextEditor";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { JSX } from "react";
import { EmptyEditor } from "../../app/bodyEditors/EmptyEditor";

export type BodyEditorProps = {
  id: string
}

const BodyTriage: {[key:string]: (props: BodyEditorProps) => JSX.Element} = {
  empty: EmptyEditor,
  text: DemoTextEditor
}

export function SquareBodyTriageComponent({ id }: { id: string; }) {
  const data = useAppSelector(selectPanelData(id))
  const specifiedComponent = data?.componentTypeId ? BodyTriage[data?.componentTypeId] : undefined
  const component = specifiedComponent ?? EmptyEditor


  return component({id});
}
