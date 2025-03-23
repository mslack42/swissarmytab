import { BodyEditorId } from "./BodyEditorId"
import { Json } from "./Editors/Json"
import { Text } from "./Editors/Text"

export type Editor = {
    id: BodyEditorId,
    name: string,
    description: string,
    icon: string,
    hasSettings: boolean
}

type Editors = {
    [key in BodyEditorId]?: Editor
}

export const Editors: Editors = {
    text: Text,
    json: Json
}


