import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";
import { Settings } from "lucide-react";
import { FavouriteStar } from "./FavouriteStar";
import { EnabledCheckbox } from "./EnabledCheckbox";
import { useAppSelector } from "@/store/redux/hooks";
import {
  isEnabledEditor,
  isFavouriteEditor,
} from "@/store/redux/slices/editorConfigSlice";
import { cn } from "@/lib/utils";

export type BodyEditorCardProps = {
  bodyEditorId: BodyEditorId;
};

export function BodyEditorCard({ bodyEditorId }: BodyEditorCardProps) {
  const data = Editors[bodyEditorId];
  const isEnabled = useAppSelector(isEnabledEditor(bodyEditorId));
  const isFavourited = useAppSelector(isFavouriteEditor(bodyEditorId));

  return (
    <div
      className={cn(
        "border-white rounded-md border-2 h-28 w-52",
        isFavourited && isEnabled ? "border-amber-700" : "",
        isEnabled ? "bg-green-800" : "bg-red-800",
      )}
    >
      <div className="h-28 w-52">
        <h2 className="text-xl">{data?.name}</h2>
        <p>{data?.description}</p>
        <div className="w-full flex flex-row justify-between">
          <div className="basis-1/2 ">
            <div className="w-full flex flex-start">
              {data?.hasSettings ? <Settings /> : <></>}
            </div>
          </div>
          <div className="basis-1/2">
            <div className="w-full flex flex-row-reverse">
              <FavouriteStar bodyEditorId={bodyEditorId} />
              <EnabledCheckbox bodyEditorId={bodyEditorId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
