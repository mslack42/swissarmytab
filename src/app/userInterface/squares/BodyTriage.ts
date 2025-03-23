import { DemoTextEditor } from "@/app/bodyEditors/DemoTextEditor";
import { EmptyEditor } from "@/app/bodyEditors/EmptyEditor";
import { JSX } from "react";
import { BodyEditorProps } from "./SquareBodyTriageComponent";
import { BodyEditorConfig } from "@/app/bodyEditors/configurationEditors.tsx/editorConfig/EditorConfig";

export const BodyTriage: { [key: string]: (props: BodyEditorProps) => JSX.Element; } = {
  empty: EmptyEditor,
  text: DemoTextEditor,
  editorConfig: BodyEditorConfig
};
