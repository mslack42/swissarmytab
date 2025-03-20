import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { demoConfig } from "@/demos/demoConfig";
import { SquareData } from "@/app/squares/SquareData";

export interface SquaresState {
    gridJSON: string,
    panelData: SquareData[]
}

const initialState: SquaresState = demoConfig

type AddPanelPayload = {
  id: string,
  name: string,
  dataId?: string,
  componentTypeId?: string
}

type RenamePanelPayload = {
  id: string,
  name: string
}

export const squaresSlice = createSlice({
    name: "squares",
    initialState,
    reducers: {
        addPanel: (state,action: PayloadAction<AddPanelPayload>) => {
          if (state.panelData.some(p => p.id == action.payload.id)){
            return
          }
          state.panelData = [...state.panelData, {
            id: action.payload.id,
            componentTypeId: action.payload.componentTypeId ?? "empty",
            title: action.payload.name,
            dataId: action.payload.dataId ?? action.payload.id
          }]
        },
        storeGridJSON: (state, action: PayloadAction<string>) => {
          state.gridJSON = action.payload
        },
        deletePanels: (state, action: PayloadAction<string[]>) => {
          state.panelData = state.panelData.filter(p => !action.payload.includes(p.id))
        },
        renamePanel: (state, action: PayloadAction<RenamePanelPayload>) => {
          state.panelData = state.panelData.map(p => {
            if (p.id != action.payload.id) {
              return p
            }
            return {...p, title: action.payload.name}
          })
        }
    }
})

export const selectPanelData = (panelId: string) => ((state: RootState) => state.squares.panelData.find(pd => pd.id == panelId))
export const selectSquares = (state:RootState) => state.squares
export const selectHasPluralPanels = (state:RootState) => state.squares.panelData.length > 1

export const { addPanel, storeGridJSON, deletePanels, renamePanel } = squaresSlice.actions

export default squaresSlice.reducer