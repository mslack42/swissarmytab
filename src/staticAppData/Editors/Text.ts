import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const Text: Editor = {
  id: BodyEditorId.text,
  name: "Text",
  description: "Plainest plain text",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.Text,
};
