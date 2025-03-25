import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { BodyEditorCardProps } from "./BodyEditorCard";
import {
  isEnabledEditor,
  toggleEnabled,
} from "@/store/redux/slices/editorConfigSlice";
import { Check, X } from "lucide-react";

export function EnabledCheckbox({ bodyEditorId }: BodyEditorCardProps) {
  const isEnabled = useAppSelector(isEnabledEditor(bodyEditorId));
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleEnabled(bodyEditorId));
  };

  return (
    <div className="opacity-50 bg-slate-800 rounded-lg" onClick={toggle}>
      {isEnabled ? <DisableEditor /> : <EnableEditor />}
    </div>
  );
}

export function DisableEditor() {
  return <X className="text-red-400" />;
}

export function EnableEditor() {
  return <Check className="text-green-400" />;
}
