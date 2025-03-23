import { DockviewApi, IDockviewPanel } from "dockview";
import "./userInterface/squares/dockview.css";
import { SquaresView, SquaresViewProps } from "./userInterface/squares/SquaresView";
import { useEffect, useState } from "react";
import { squaresService } from "@/store/services/squaresService";

export function Main() {
  const squaresData = squaresService.initialConfiguration()
  const [initialSquaresData] = useState(squaresData)

  const [config, setConfig] = useState<SquaresViewProps>();

  useEffect(() => {
      const onSquareAdd = (panel: IDockviewPanel) =>
        squaresService.addNewSquareToStore(panel);
      const onLayoutChange = (api: DockviewApi) => {
        squaresService.storeLayout(api)
      }
      const onSquaresDelete = (ids: string[]) => {
        squaresService.removeSquaresFromStore(ids)
      }
  
      setConfig({
        gridJSON: initialSquaresData.gridJSON,
        panelData: initialSquaresData.panelData,
        onSquareAdd: onSquareAdd,
        onSquaresLayoutChanged: onLayoutChange,
        onSquaresRemoval: onSquaresDelete
      });

  }, [initialSquaresData]);

  return config != null ? <SquaresView {...config} /> : <></>;
}
