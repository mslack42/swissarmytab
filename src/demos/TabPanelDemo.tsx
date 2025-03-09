import {
  DockviewApi,
  DockviewReact,
  DockviewReadyEvent,
  GroupPanelViewState,
  GroupviewPanelState,
  IDockviewPanelProps,
  Orientation,
  SerializedDockview,
  SerializedGridObject,
} from "dockview-react";
import { JSX, useEffect, useState } from "react";
import "./dockview.css";
import { SquareTabHeader } from "./squares/SquareTabHeader";
import { DemoBodyEditor } from "./DemoBodyEditor";
import { SquareComponentPanelMap } from "./squares/SquareComponentPanelMap";

export function TabPanelDemo() {
  const json: SquaresViewProps = {
    grid: {
      root: {
        type: "branch",
        data: [
          {
            type: "leaf",
            data: {
              views: ["panel_1", "panel_2", "panel_3"],
              activeView: "panel_1",
              id: "1",
            },
            size: 519,
          },
          {
            type: "branch",
            data: [
              {
                type: "leaf",
                data: {
                  views: ["panel_4", "panel_5"],
                  activeView: "panel_5",
                  id: "2",
                },
                size: 369,
              },
              {
                type: "branch",
                data: [
                  {
                    type: "branch",
                    data: [
                      {
                        type: "leaf",
                        data: {
                          views: ["panel_7"],
                          activeView: "panel_7",
                          id: "4",
                        },
                        size: 179.5,
                      },
                      {
                        type: "leaf",
                        data: {
                          views: ["panel8"],
                          activeView: "panel8",
                          id: "5",
                        },
                        size: 179.5,
                      },
                    ],
                    size: 252,
                  },
                  {
                    type: "leaf",
                    data: {
                      views: ["panel_6"],
                      activeView: "panel_6",
                      id: "3",
                    },
                    size: 258,
                  },
                ],
                size: 364,
              },
            ],
            size: 515,
          },
        ],
        size: 738,
      },
      width: 1039,
      height: 738,
      orientation: "HORIZONTAL",
    },
    panelData: [
      {
        id: "panel_1",
        componentTypeId: "defaultBodyEditor",
        dataId: "123",
        title: "Panel 1",
      },
      {
        id: "panel_2",
        componentTypeId: "defaultBodyEditor",
        dataId: "1234",
        title: "Panel 2",
      },
      {
        id: "panel_3",
        componentTypeId: "defaultBodyEditor",
        dataId: "12345",
        title: "Panel 3",
      },
      {
        id: "panel_4",
        componentTypeId: "defaultBodyEditor",
        dataId: "123456",
        title: "Panel 4",
      },
      {
        id: "panel_5",
        componentTypeId: "defaultBodyEditor",
        dataId: "1234567",
        title: "Panel 5",        
      },
      {
        id: "panel_6",
        componentTypeId: "defaultBodyEditor",
        dataId: "12345678",
        title: "Panel 6",
      },
      {
        id: "panel_7",
        componentTypeId: "defaultBodyEditor",
        dataId: "123456789",
        title: "Panel 7",
      },
      {
        id: "panel8",
        componentTypeId: "defaultBodyEditor",
        dataId: "1234567890",
        title: "Panel 8",
      },
    ],
  };

  return <SquaresView {...json} />;
}

type SquaresViewProps = {
  grid: {
    root: SerializedGridObject<GroupPanelViewState>;
    height: number;
    width: number;
    orientation: Orientation;
  };
  panelData: PanelData[];
};
type PanelData = {
  id: string;
  title: string;
  dataId: string;
  componentTypeId: string;
};

function BodyEditor(data: PanelData) {
  const map: {[key:string]: (d: PanelData) => JSX.Element} = {
    "defaultBodyEditor": (d: PanelData) => <DemoBodyEditor dataId={d.dataId} />,
  };


  return map[data.componentTypeId] ? map[data.componentTypeId](data) : <>Not Found</>;
}

export function SquaresView(props: SquaresViewProps) {
  function DockViewPropsFromProps(
    props: SquaresViewProps
  ): [
    Record<string, React.FunctionComponent<IDockviewPanelProps>>,
    SerializedDockview
  ] {
    const components: Record<
      string,
      React.FunctionComponent<IDockviewPanelProps>
    > = {};
    const panels: Record<string, GroupviewPanelState> = {};
    props.panelData.forEach((pd) => {
      components[pd.id] = SquareComponentPanelMap(BodyEditor(pd));
      panels[pd.id] = {
        id: pd.id,
        contentComponent: pd.id,
        title: pd.title,
      };
    });

    const dockConf: SerializedDockview = {
      grid: props.grid,
      panels: panels,
    };

    return [components, dockConf];
  }

  const [components, defaultPanelConfig] = DockViewPropsFromProps(props);

  const headerComponents = {
    default: SquareTabHeader,
  };

  const [api, setApi] = useState<DockviewApi>();

  const onReady = (event: DockviewReadyEvent) => {
    setApi(event.api);
  };

  useEffect(() => {
    if (!api) {
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
    <DockviewReact
      components={components}
      defaultTabComponent={headerComponents.default}
      gap={5}
      // rightHeaderActionsComponent={RightControls}
      // leftHeaderActionsComponent={LeftControls}
      // prefixHeaderActionsComponent={PrefixHeaderControls}

      onReady={onReady}
    />
  );
}
