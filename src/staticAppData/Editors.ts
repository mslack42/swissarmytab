import { BodyEditorId } from "./BodyEditorId";
import { Editor } from "./Editor";
import { Json } from "./Editors/Json";
import { Text } from "./Editors/Text";
import { NoSleep } from "./Editors/NoSleep"

type Editors = {
    [key in BodyEditorId]?: Editor;
};

export const Editors: Editors = {
    text: Text,
    json: Json,
    nosleep: NoSleep
};
