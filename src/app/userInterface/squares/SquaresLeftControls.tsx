import { squaresService } from "@/store/services/squaresService";
import { IDockviewHeaderActionsProps } from "dockview";
import { Plus } from "lucide-react";

export const SquaresLeftControls = (props: IDockviewHeaderActionsProps) => {
  const onClick = () => {
    squaresService.addSquare(props);
  };

  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <Plus className="h-4" onClick={onClick} />
    </div>
  );
};
