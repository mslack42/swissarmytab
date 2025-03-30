import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import { FileJson, FileQuestion, LetterText } from "lucide-react";
import { JSX } from "react";

type EditorIconMap = Partial<{
  [key in BodyEditorId] : JSX.Element
}>

const iconSize = 80

const editorIconMap: EditorIconMap = {
  text: <LetterText size={iconSize}/>,
  json: <FileJson size={iconSize}/>
}

type EditorIconProps = {
  bodyEditorId: BodyEditorId;
  onSelect: (id: BodyEditorId) => void;
};
export function EditorIcon({ bodyEditorId, onSelect }: EditorIconProps) {
  const mappedIcon = editorIconMap[bodyEditorId]
  const icon = mappedIcon ?? <FileQuestion size={iconSize}/>

  return <button onClick={() => onSelect(bodyEditorId)}>{
    <div className="w-24 h-28 bg-slate-500 rounded-xl hover:bg-slate-600">
      <div className="text-xl w-full">{icon}</div>
      <p className="w-full text-center">{Editors[bodyEditorId]?.name}</p>
    </div>
  }</button>;
}
