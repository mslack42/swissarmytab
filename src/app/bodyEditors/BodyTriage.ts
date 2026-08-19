import { PlaintextEditor } from "@/app/bodyEditors/plaintextEditor/PlaintextEditor";
import { EmptyEditor } from "@/app/bodyEditors/emptyEditor/EmptyEditor";
import { JSX } from "react";
import { BodyEditorProps } from "../userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorConfig } from "@/app/bodyEditors/configurationEditors/editorConfig/EditorConfig";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { KeepAwakeEditor } from "./keepAwakeEditor/KeepAwakeEditor";
import { Settings } from "./configurationEditors/Settings";
import { ContextMenuConfig } from "./configurationEditors/contextMenuConfig/contextMenuConfig";
import { About } from "./configurationEditors/about/About";
import { JsonEditor } from "./jsonEditor/JsonEditor";
import { JpathEditor } from "./jpathEditor/JpathEditor";
import { QREditor } from "./qrEditor/QREditor";

export const BodyTriage: Partial<{
  [key in BodyEditorId]: (props: BodyEditorProps) => JSX.Element;
}> = {
  empty: EmptyEditor,
  // Settings stuff
  settings: Settings,
  contextMenuConfig: ContextMenuConfig,
  editorConfig: BodyEditorConfig,
  about: About,
  // Editors
  plaintext: PlaintextEditor,
  json: JsonEditor,
  keepawake: KeepAwakeEditor,
  jpath: JpathEditor,
  qr: QREditor
};
