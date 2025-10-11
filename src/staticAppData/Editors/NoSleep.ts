import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const KeepAwake: Editor = {
  id: BodyEditorId.keepawake,
  name: "Keep Awake",
  description: "Prevent your computer from sleeping",
  icon: "",
  hasSettings: false,
  dataType: EditorDataType.None,
};
