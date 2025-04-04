import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

type NoneData = {
    dataType: "none"
}
type TextData = {
    dataType: "text",
    content: string
}

export type Data = NoneData | TextData

export type DataStorageState = {
    [key: string]: Data
}

const initialState: DataStorageState = {}

type DataUpdatePayload = {
    dataId: string,
    data: Data
}

export const dataStorageSlice = createSlice({
    name: "dataStorage",
    initialState,
    reducers: {
        saveData: (state, payload: PayloadAction<DataUpdatePayload>) => {
            state[payload.payload.dataId] = payload.payload.data
        }
    },
})

export const selectData: (dataId: string) => (state: RootState) => Data | undefined =
    (dataId: string) => (state: RootState) => {
        return state.dataStorage[dataId]
    }

export const { saveData } = dataStorageSlice.actions

export default dataStorageSlice.reducer