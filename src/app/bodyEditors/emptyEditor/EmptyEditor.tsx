import { useAppSelector } from "@/store/redux/hooks";
import { BodyEditorProps } from "../../userInterface/squares/SquareBodyTriageComponent";
import {
  enabledEditors,
  favouriteEditors,
} from "@/store/redux/slices/editorConfigSlice";
import { Separator } from "@/components/ui/separator";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { squaresService } from "@/store/services/squaresService";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { EditorIcon } from "./EditorIcon";

export function EmptyEditor(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id));
  const favourites = useAppSelector(favouriteEditors);
  const enabled = useAppSelector(enabledEditors);
  const onSelect = (b: BodyEditorId) => {
    if (data) squaresService.transformSquare(data.id, b);
  };
  const displayedFavourites = favourites.filter(f => enabled.includes(f))

  return (
    <>
      <h1>Favourites</h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {displayedFavourites.map((f) => (
          <li key={f}>
            <EditorIcon bodyEditorId={f} onSelect={onSelect} />
          </li>
        ))}
      </ul>
      <Separator className="my-2" />
      <h1>All editors</h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {enabled.map((e) => (
          <li key={e}>
            <EditorIcon bodyEditorId={e} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </>
  );
}
