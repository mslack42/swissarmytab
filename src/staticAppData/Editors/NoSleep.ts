import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const NoSleep: Editor = {
    id: BodyEditorId.nosleep,
    name: "No Sleep",
    description: "Keeping green dots green",
    icon: "",
    hasSettings: false,
    dataType: EditorDataType.None
};