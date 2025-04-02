import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { SubSettingsWrapper } from "../SubSettingsWrapper";

export function ContextMenuConfig(props: BodyEditorProps) {
  return (
    <SubSettingsWrapper panelId={props.id}>
      <p>This hasn't been implemented yet...</p>
    </SubSettingsWrapper>
  );
}
