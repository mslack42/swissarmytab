import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import {
  Eye,
  FileJson,
  FileQuestion,
  FileSearch,
  LetterText,
} from "lucide-react";
import { JSX } from "react";

type EditorIconMap = Partial<{
  [key in BodyEditorId]: JSX.Element;
}>;

const iconSize = 80;

const editorIconMap: EditorIconMap = {
  plaintext: <LetterText size={iconSize} />,
  json: <FileJson size={iconSize} />,
  keepawake: <Eye size={iconSize} />,
  jpath: <FileSearch size={iconSize} />,
};

type EditorIconProps = {
  bodyEditorId: BodyEditorId;
  onSelect: (id: BodyEditorId) => void;
};
export function EditorIcon({ bodyEditorId, onSelect }: EditorIconProps) {
  const mappedIcon = editorIconMap[bodyEditorId];
  const icon = mappedIcon ?? <FileQuestion size={iconSize} />;

  return (
    <button onClick={() => onSelect(bodyEditorId)}>
      {
        <div className="w-24 h-36 bg-slate-500 rounded-xl hover:bg-slate-600 p-2">
          <div className="text-xl w-full justify-center h-24">{icon}</div>
          <div className="flex flex-col justify-center h-4">
            <p className="w-full text-center">{Editors[bodyEditorId]?.name}</p>
          </div>
        </div>
      }
    </button>
  );
}
