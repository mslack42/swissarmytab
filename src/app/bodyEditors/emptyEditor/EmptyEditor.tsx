import { useAppSelector } from "@/store/redux/hooks";
import { BodyEditorProps } from "../../userInterface/squares/SquareBodyTriageComponent";
import { enabledEditors } from "@/store/redux/slices/editorConfigSlice";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { squaresService } from "@/store/services/squaresService";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { EditorIcon } from "./EditorIcon";
import { Separator } from "@radix-ui/react-context-menu";
import { useContext } from "react";
import { SquareContext } from "@/app/userInterface/squares/SquareContentWrapper";

export function EmptyEditor(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id));
  // const favourites = useAppSelector(favouriteEditors);
  const enabled = useAppSelector(enabledEditors);
  const onSelect = (b: BodyEditorId) => {
    if (data) squaresService.transformSquare(data.id, b);
  };
  // const displayedFavourites = favourites.filter((f) => enabled.includes(f));

  return (
    <>
      {/* <h1>Favourites</h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {displayedFavourites.map((f) => (
          <li key={f}>
            <EditorIcon bodyEditorId={f} onSelect={onSelect} />
          </li>
        ))}
      </ul>
      <Separator className="my-2" /> */}
      {enabled.length > 0 && (
        <>
          <h1>Choose an editor</h1>
          <Separator className="my-2 mx-3 h-1 bg-slate-500" />
          <ul className="flex flex-wrap justify-center gap-4">
            {enabled.map((e) => (
              <li key={e}>
                <EditorIcon bodyEditorId={e} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        </>
      )}
      {enabled.length == 0 && <NoEditorsConfigured panelId={props.id} />}
    </>
  );
}

function NoEditorsConfigured({ panelId }: { panelId: string }) {
  const { api } = useContext(SquareContext);
  const onClick = () => {
    squaresService.transformSquare(panelId, BodyEditorId.settings);
    if (api) {
      squaresService.renameSquare(
        panelId,
        squaresService.uniquifySquareName("settings"),
        api,
      );
    }
  };

  return (
    <>
      <h1>
        <span>
          Looks like you haven't got any editors configured. You can change this
          in the{" "}
        </span>
        <button onClick={onClick} className="underline text-slate-400">
          settings
        </button>
        <span>.</span>
      </h1>
    </>
  );
}
