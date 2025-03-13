import {store} from "@/store/store"
import { addPanel, storeGridJSON } from "./slices/squaresSlice"
import {v4 as uuidv4} from 'uuid'
import { DockviewApi, IDockviewHeaderActionsProps, IDockviewPanel } from "dockview"

export class SquaresService {
    addSquare = (props: IDockviewHeaderActionsProps) => {
        const newPanelId = uuidv4()
        // TODO: find a unique new tab name
        const newPanelName = "New Tab"
        props.containerApi.addPanel({
            id: newPanelId,
            component: "default",
            title: newPanelName,
            position: {
              referenceGroup: props.group,
            },
          });
    }
    addNewSquareToStore = (panel: IDockviewPanel) => {
        store.dispatch(addPanel({id:panel.id,name:panel.title ?? ""}))
    }
    storeLayout = (api:DockviewApi) => {
      store.dispatch(storeGridJSON(JSON.stringify(api.toJSON())))
    }
}
const squaresService = new SquaresService()

export {squaresService}