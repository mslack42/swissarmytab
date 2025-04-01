import { BodyEditorId } from "./BodyEditorId"
import { EditorDataType } from "./EditorDataType"

export type Editor = {
    id: BodyEditorId,
    name: string,
    description: string,
    icon: string,
    hasSettings: boolean,
    dataType: EditorDataType
}


