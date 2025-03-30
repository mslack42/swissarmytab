import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { EmptyEditor } from "../../bodyEditors/emptyEditor/EmptyEditor";
import { BodyTriage } from "./BodyTriage";
import { createElement } from "react";

export type BodyEditorProps = {
  id: string
}

export function SquareBodyTriageComponent({ id }: { id: string; }) {
  const data = useAppSelector(selectPanelData(id))
  const specifiedComponent = data?.componentTypeId ? BodyTriage[data?.componentTypeId] : undefined
  const component = specifiedComponent ?? EmptyEditor

  return createElement(component, {id});
}
