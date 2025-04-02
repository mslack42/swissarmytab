import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  isFavouriteEditor,
  toggleFavourite,
} from "@/store/redux/slices/editorConfigSlice";
import { Star } from "lucide-react";
import { BodyEditorCardProps } from "./BodyEditorCard";

export function FavouriteStar({ bodyEditorId }: BodyEditorCardProps) {
  const isFavourited = useAppSelector(isFavouriteEditor(bodyEditorId));
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleFavourite(bodyEditorId));
  };

  return (
    <div onClick={toggle} className="bg-slate-800 rounded-lg">
      {isFavourited ? <UnfavouriteEditor /> : <FavouriteEditor />}
    </div>
  );
}

export function FavouriteEditor() {
  return <Star />;
}

export function UnfavouriteEditor() {
  return <Star fill="yellow" color="yellow" />;
}
