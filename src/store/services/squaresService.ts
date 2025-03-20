import { store } from "@/store/redux/store"
import { v4 as uuidv4 } from 'uuid'
import { DockviewApi, DockviewPanelApi, IDockviewHeaderActionsProps, IDockviewPanel } from "dockview"
import { addPanel, storeGridJSON, deletePanels, renamePanel } from "../redux/slices/squaresSlice"

export class SquaresService {
  initialConfiguration = () => {
    return store.getState().squares
  }
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
    store.dispatch(addPanel({ id: panel.id, name: panel.title ?? "" }))
  }
  storeLayout = (api: DockviewApi) => {
    store.dispatch(storeGridJSON(JSON.stringify(api.toJSON().grid)))
  }
  removeSquaresFromStore = (ids: string[]) => {
    store.dispatch(deletePanels(ids))
  }
  renameSquare = (id: string, newName: string, api: DockviewPanelApi) => {
    const nameExists = store.getState().squares.panelData.some(p => p.title == newName)

    if (!nameExists) {
      api.setTitle(newName)
      store.dispatch(renamePanel({id, name: newName}))
      return true
    }

    return false
  }
  dupeSquare = (panelApi: DockviewPanelApi, containerApi: DockviewApi) => {
    const newPanelId = uuidv4()
    const newDataId = uuidv4()
    // TODO: find a unique new tab name
    const newPanelName = panelApi.title + " (cloned)"
    const oldPanelData = store.getState().squares.panelData.filter(p => p.id == panelApi.id)[0]
    store.dispatch(addPanel({ id: newPanelId, name: newPanelName, componentTypeId: oldPanelData.componentTypeId, dataId: newDataId }))
    containerApi.addPanel({
      id: newPanelId,
      component: panelApi.component,
      title: newPanelName,
      position: {
        referenceGroup: panelApi.group,
      },
    });
  }
}
const squaresService = new SquaresService()

export { squaresService }