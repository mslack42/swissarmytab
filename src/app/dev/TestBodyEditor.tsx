import { useParams } from "react-router";
import { SquareBodyTriageComponent } from "../userInterface/squares/SquareBodyTriageComponent";

export function TestBodyEditor() {
  const params = useParams();
  return <SquareBodyTriageComponent id={params.panelId!} />;
}
