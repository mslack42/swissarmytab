import { DemoTextEditor } from "@/app/bodyEditors/DemoTextEditor";
import { EmptyEditor } from "@/app/bodyEditors/emptyEditor/EmptyEditor";
import { JSX } from "react";
import { BodyEditorProps } from "../userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorConfig } from "@/app/bodyEditors/configurationEditors/editorConfig/EditorConfig";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { NoSleepEditor } from "./nosleepEditor/NoSleepEditor";

export const BodyTriage: Partial<{ [key in BodyEditorId]: (props: BodyEditorProps) => JSX.Element }> = {
  empty: EmptyEditor,
  text: DemoTextEditor,
  editorConfig: BodyEditorConfig,
  json: DemoTextEditor,
  nosleep: NoSleepEditor
};
