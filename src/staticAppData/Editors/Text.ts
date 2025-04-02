import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const Text: Editor = {
  id: BodyEditorId.text,
  name: "Text",
  description: "Just a place you can dump text",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.Text,
};
