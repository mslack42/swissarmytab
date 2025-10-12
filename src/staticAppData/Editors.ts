import { BodyEditorId } from "./BodyEditorId";
import { Editor } from "./Editor";
import { Json } from "./Editors/Json";
import { Text } from "./Editors/Text";
import { KeepAwake } from "./Editors/NoSleep";
import { Jpath } from "./Editors/JPath";

type Editors = {
  [key in BodyEditorId]?: Editor;
};

export const Editors: Editors = {
  json: Json,
  jpath: Jpath,
  plaintext: Text,
  keepawake: KeepAwake,
};
