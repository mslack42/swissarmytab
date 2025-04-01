import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import { BodyEditorCard } from "./BodyEditorCard";
import { DisableEditor, EnableEditor } from "./EnabledCheckbox";
import { UnfavouriteEditor } from "./FavouriteStar";

export function BodyEditorConfig() {
  return (
    <>
      <span className="text-sm w-full text-center italic">
        <p className="inline-flex w-full text-center justify-center">
          Enable <EnableEditor /> any tools that might be useful
        </p>
        <p className="inline-flex w-full text-center justify-center">
          Disable <DisableEditor /> any tools that won't
        </p>
        <p className="inline-flex w-full text-center justify-center">
          Make sure to favourite <UnfavouriteEditor /> the most useful tools
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
