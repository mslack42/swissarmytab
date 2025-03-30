import { DemoTextEditor } from "@/app/bodyEditors/DemoTextEditor";
import { EmptyEditor } from "@/app/bodyEditors/emptyEditor/EmptyEditor";
import { JSX } from "react";
import { BodyEditorProps } from "./SquareBodyTriageComponent";
import { BodyEditorConfig } from "@/app/bodyEditors/configurationEditors/editorConfig/EditorConfig";
import { BodyTriageKey } from "./BodyTriageKey";

export const BodyTriage: Partial<{ [key in BodyTriageKey]: (props: BodyEditorProps) => JSX.Element }> = {
  empty: EmptyEditor,
  text: DemoTextEditor,
  editorConfig: BodyEditorConfig
};
