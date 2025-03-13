import { DockviewApi, IDockviewPanel } from "dockview";
import "./dockview.css";
import { SquaresView, SquaresViewProps } from "./squares/SquaresView";
import { useAppSelector } from "@/store/hooks";
import { selectSquares } from "@/store/slices/squaresSlice";
import { squaresService } from "@/store/squaresService";
import { useEffect, useState } from "react";

export function TabPanelDemo() {
  const squaresData = useAppSelector(selectSquares);
  const [initialSquaresData] = useState(squaresData)

  const [config, setConfig] = useState<SquaresViewProps>();
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    if (!initialised) {
      // const onSquareAdd = (panel: IDockviewPanel) =>
      //   squaresService.addNewSquareToStore(panel);
      // const onLayoutChange = (api: DockviewApi) => {
      //   squaresService.storeLayout(api)
      // }
  
      setConfig({
        gridJSON: initialSquaresData.gridJSON,
        panelData: initialSquaresData.panelData,
        // onSquareAdd: onSquareAdd,
        // onSquaresLayoutChanged: onLayoutChange
      });
    }
    setInitialised(true)
  }, []);

  return initialised && config != null ? <SquaresView {...config} /> : <></>;
}
