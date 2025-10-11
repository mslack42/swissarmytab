import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const Text: Editor = {
  id: BodyEditorId.plaintext,
  name: "Text",
  description: "Plaintext",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.Text,
};
