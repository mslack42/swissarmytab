import { DemoTextEditor } from "@/app/bodyEditors/DemoTextEditor";
import { EmptyEditor } from "@/app/bodyEditors/emptyEditor/EmptyEditor";
import { JSX } from "react";
import { BodyEditorProps } from "../userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorConfig } from "@/app/bodyEditors/configurationEditors/editorConfig/EditorConfig";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { NoSleepEditor } from "./nosleepEditor/NoSleepEditor";
import { Settings } from "./configurationEditors/Settings";
import { ContextMenuConfig } from "./configurationEditors/contextMenuConfig/contextMenuConfig";
import { About } from "./configurationEditors/about/About";

export const BodyTriage: Partial<{ [key in BodyEditorId]: (props: BodyEditorProps) => JSX.Element }> = {
  empty: EmptyEditor,
  // Settings stuff
  settings: Settings,
  contextMenuConfig: ContextMenuConfig,
  editorConfig: BodyEditorConfig,
  about: About,
  // Editors
  text: DemoTextEditor,
  json: DemoTextEditor,
  nosleep: NoSleepEditor,
};
