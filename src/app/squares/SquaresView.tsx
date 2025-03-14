import {
  IDockviewPanelProps,
  SerializedDockview,
  GroupviewPanelState,
  DockviewApi,
  DockviewReadyEvent,
  DockviewReact,
  IDockviewPanel,
  IWatermarkPanelProps,
} from "dockview";
import { useState, useEffect, Suspense } from "react";
import { SquareTabHeader } from "./SquareTabHeader";
import { SquareData } from "./SquareData";
import { SquareContentWrapper } from "./SquareContentWrapper";
import { SquaresLeftControls } from "./SquaresLeftControls";
import { SquaresRightControls } from "./SquaresRightControls";
import { SquareBodyTriageComponent } from "./SquareBodyTriageComponent";
import { EmptyEditor } from "../../app/bodyEditors/EmptyEditor";
import { squaresService } from "@/store/squaresService";

export type SquaresViewProps = {
  gridJSON: string;
  panelData: SquareData[];
  onSquaresLayoutChanged?: (api: DockviewApi) => void;
  onSquareAdd?: (panel: IDockviewPanel) => void;
  onSquaresRemoval?: (panelIds: string[]) => void;
};

function DockViewPropsFromProps(
  props: SquaresViewProps
): [
  Record<string, React.FunctionComponent<IDockviewPanelProps>>,
  SerializedDockview
] {
  const components: Record<
    string,
    React.FunctionComponent<IDockviewPanelProps>
  > = {
    default: (props: IDockviewPanelProps) => (
      <SquareContentWrapper {...props}>
        <SquareBodyTriageComponent id={props.api.id} />
      </SquareContentWrapper>
    ),
  };
  const panels: Record<string, GroupviewPanelState> = {};
  props.panelData.forEach((pd) => {
    panels[pd.id] = {
      id: pd.id,
      contentComponent: "default",
      title: pd.title
    };
  });

  const dockConf: SerializedDockview = {
    grid: JSON.parse(props.gridJSON),
    panels: panels,
  };

  return [components, dockConf];
}

export function SquaresView({
  gridJSON,
  panelData,
  onSquaresLayoutChanged,
  onSquareAdd,
  onSquaresRemoval
}: SquaresViewProps) {
  const [components, defaultPanelConfig] = DockViewPropsFromProps({
    gridJSON,
    panelData,
  });
  const [api, setApi] = useState<DockviewApi>();

  const onReady = (event: DockviewReadyEvent) => {
    setApi(event.api);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const layoutDisposable = api.onDidLayoutChange((e) => {
      if (onSquaresLayoutChanged) {
        onSquaresLayoutChanged(api);
      }
    });

    return () => {
      layoutDisposable.dispose();
    };
  }, [api, onSquaresLayoutChanged]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const panelAddDisposable = api.onDidAddPanel((e) => {
      if (onSquareAdd) {
        onSquareAdd(e);
      }
    });

    return () => {
      panelAddDisposable.dispose();
    };
  }, [api, onSquareAdd]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const removePanelDisposable = api.onDidRemovePanel((e) => {
      if (onSquaresRemoval) {
        onSquaresRemoval([e.id])
      }
    });
    const removeGroupDisposable = api.onDidRemoveGroup((e) => {
      if (onSquaresRemoval) {
        onSquaresRemoval(e.panels.map(p => p.id))
      }
    });

    return () => {
      removePanelDisposable.dispose();
      removeGroupDisposable.dispose();
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const groupDisposable = api.onWillDragGroup((e) => {
      if (api.hasMaximizedGroup()) {
        e.nativeEvent.preventDefault();
      }
    });

    const panelDisposable = api.onWillDragPanel((e) => {
      if (api.hasMaximizedGroup()) {
        e.nativeEvent.preventDefault();
      }
    });

    return () => {
      panelDisposable.dispose();
      groupDisposable.dispose();
    };
  }, [api]);

  useEffect(() => {
    if (!api || !defaultPanelConfig) {
      return;
    }

    try {
      api.fromJSON(defaultPanelConfig);
    } catch (e) {
      alert(
        "Failed to load panels, and graceful handling for this has not been implemented yet"
      );
    }
  }, [api, defaultPanelConfig]);

  return (
    <>
      <Suspense>
        <DockviewReact
          components={components}
          gap={5}
          defaultTabComponent={SquareTabHeader}
          rightHeaderActionsComponent={SquaresRightControls}
          leftHeaderActionsComponent={SquaresLeftControls}
          onReady={onReady}
        />
      </Suspense>
    </>
  );
}
