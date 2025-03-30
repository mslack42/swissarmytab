import { BodyTriageKey } from "@/app/userInterface/squares/BodyTriageKey";
import { SquaresViewProps } from "@/app/userInterface/squares/SquaresView";

export const demoConfig: SquaresViewProps = {
  gridJSON: "{\"root\":{\"type\":\"branch\",\"data\":[{\"type\":\"leaf\",\"data\":{\"views\":[\"panel_1\",\"panel_2\",\"panel_3\"],\"activeView\":\"panel_1\",\"id\":\"1\"},\"size\":519},{\"type\":\"branch\",\"data\":[{\"type\":\"leaf\",\"data\":{\"views\":[\"panel_4\",\"panel_5\"],\"activeView\":\"panel_5\",\"id\":\"2\"},\"size\":369},{\"type\":\"branch\",\"data\":[{\"type\":\"branch\",\"data\":[{\"type\":\"leaf\",\"data\":{\"views\":[\"panel_7\"],\"activeView\":\"panel_7\",\"id\":\"4\"},\"size\":179.5},{\"type\":\"leaf\",\"data\":{\"views\":[\"panel8\"],\"activeView\":\"panel8\",\"id\":\"5\"},\"size\":179.5}],\"size\":252},{\"type\":\"leaf\",\"data\":{\"views\":[\"panel_6\"],\"activeView\":\"panel_6\",\"id\":\"3\"},\"size\":258}],\"size\":364}],\"size\":515}],\"size\":738},\"width\":1039,\"height\":738,\"orientation\":\"HORIZONTAL\"}",
  panelData: [
    {
      id: "panel_1",
      componentTypeId: BodyTriageKey.editorConfig,
      dataId: "123",
      title: "Panel 1",
    },
    {
      id: "panel_2",
      componentTypeId: BodyTriageKey.empty,
      dataId: "1234",
      title: "Panel 2",
    },
    {
      id: "panel_3",
      componentTypeId: BodyTriageKey.text,
      dataId: "12345",
      title: "Panel 3",
    },
    {
      id: "panel_4",
      componentTypeId: BodyTriageKey.text,
      dataId: "123456",
      title: "Panel 4",
    },
    {
      id: "panel_5",
      componentTypeId: BodyTriageKey.text,
      dataId: "1234567",
      title: "Panel 5",
    },
    {
      id: "panel_6",
      componentTypeId: BodyTriageKey.text,
      dataId: "12345678",
      title: "Panel 6",
    },
    {
      id: "panel_7",
      componentTypeId: BodyTriageKey.text,
      dataId: "123456789",
      title: "Panel 7",
    },
    {
      id: "panel8",
      componentTypeId: BodyTriageKey.text,
      dataId: "1234567890",
      title: "Panel 8",
    },
  ],
};
