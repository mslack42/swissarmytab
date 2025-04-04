import { store } from "@/store/redux/store";
import { Data, saveData } from "../redux/slices/dataSlice";

export class DataService {
    getData = (dataId: string) => {
        return store.getState().dataStorage[dataId]
    }
    updateData = (dataId: string, data: Data) => {
        store.dispatch(saveData({ dataId, data }))
    }
}

const dataService = new DataService();

export { dataService }