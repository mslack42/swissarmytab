import { DockviewApi, IDockviewPanel } from "dockview";
import "./squares/dockview.css";
import { SquaresView, SquaresViewProps } from "./squares/SquaresView";
import { squaresService } from "@/store/squaresService";
import { useEffect, useState } from "react";

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
