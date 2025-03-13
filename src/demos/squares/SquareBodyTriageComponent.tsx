import { useAppSelector } from "@/store/hooks";
import { DemoTextEditor } from "../bodyEditors/DemoTextEditor";
import { selectPanelData } from "@/store/slices/squaresSlice";
import { JSX } from "react";
import { EmptyEditor } from "../bodyEditors/EmptyEditor";

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
