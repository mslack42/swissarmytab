import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const Json: Editor = {
  id: BodyEditorId.json,
  name: "JSON",
  description: "Beautify, minify, escape, unescape",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.Text,
};
