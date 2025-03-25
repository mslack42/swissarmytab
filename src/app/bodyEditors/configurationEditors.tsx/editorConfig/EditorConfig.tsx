import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import { useAppSelector } from "@/store/redux/hooks";
import { selectPanelData } from "@/store/redux/slices/squaresSlice";
import { BodyEditorCard } from "./BodyEditorCard";
import { DisableEditor, EnableEditor } from "./EnabledCheckbox";
import { UnfavouriteEditor } from "./FavouriteStar";

export function BodyEditorConfig(props: BodyEditorProps) {
  const data = useAppSelector(selectPanelData(props.id));

  return (
    <>
      <span className="text-sm w-full text-center italic">
        <p className="inline-flex w-full text-center justify-center">
          Enable <EnableEditor /> any editors that might be useful
        </p>
        <p className="inline-flex w-full text-center justify-center">
          Disable <DisableEditor /> any editors that won't
        </p>
        <p className="inline-flex w-full text-center justify-center">
          Make sure to favourite <UnfavouriteEditor /> the most useful editors
        </p>
      </span>
      <ul className="flex flex-row p-2 gap-4 h-full flex-wrap justify-start">
        {Object.keys(Editors).map((k) => (
          <li key={k}>
            <BodyEditorCard bodyEditorId={k as BodyEditorId} />
          </li>
        ))}
      </ul>
    </>
  );
}
