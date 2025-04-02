import { IDockviewHeaderActionsProps } from "dockview";
import { useState, useEffect } from "react";
import { Lock, Maximize2, Minimize2 } from "lucide-react";

export const SquaresRightControls = (props: IDockviewHeaderActionsProps) => {
  const [isMaximized, setIsMaximized] = useState<boolean>(
    props.containerApi.hasMaximizedGroup(),
  );

  const canToggleMaximise = props.containerApi.groups.length > 1;

  useEffect(() => {
    const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
      setIsMaximized(props.containerApi.hasMaximizedGroup());
    });

    return () => {
      disposable.dispose();
    };
  }, [props.containerApi]);

  const onClick = () => {
    if (props.containerApi.hasMaximizedGroup()) {
      props.containerApi.exitMaximizedGroup();
    } else {
      props.activePanel?.api.maximize();
    }
  };

  if (!canToggleMaximise) {
    return <></>;
  }

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
      {isMaximized ? (
        <div title={"Panels are locked when maximised"} className="p-1">
          <Lock className="h-4" />
        </div>
      ) : (
        <></>
      )}
      <div
        title={isMaximized ? "Minimize View" : "Maximize View"}
        onClick={onClick}
        className="p-1"
      >
        {isMaximized ? (
          <Minimize2 className="h-4" />
        ) : (
          <Maximize2 className="h-4" />
        )}
      </div>
    </div>
  );
};
