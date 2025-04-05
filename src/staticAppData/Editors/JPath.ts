import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const Jpath: Editor = {
  id: BodyEditorId.jpath,
  name: "Jpath Tester",
  description: "Query JSON using JSONpath expressions",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.Text,
};
