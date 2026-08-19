import { BodyEditorId } from "../BodyEditorId";
import { Editor } from "../Editor";
import { EditorDataType } from "../EditorDataType";

export const QR: Editor = {
    id: BodyEditorId.qr,
    name: "QR Encoder",
    description: "Text-to-QR-code",
    icon: "",
    hasSettings: false,
    dataType: EditorDataType.None,
};
