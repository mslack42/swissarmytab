import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { demoConfig } from "@/demos/demoConfig";
import { SquareData } from "@/app/userInterface/squares/SquareData";
import { BodyTriageKey } from "@/app/userInterface/squares/BodyTriageKey";

export interface SquaresState {
  gridJSON: string,
  panelData: SquareData[]
}

const initialState: SquaresState = demoConfig

type AddPanelPayload = {
  id: string,
  name: string,
  dataId?: string,
  componentTypeId?: BodyTriageKey
}

type RenamePanelPayload = {
  id: string,
  name: string
}

type TransformPanelPayload = {
  id: string,
  newComponentType: BodyTriageKey
}

export const squaresSlice = createSlice({
  name: "squares",
  initialState,
  reducers: {
    addPanel: (state, action: PayloadAction<AddPanelPayload>) => {
      if (state.panelData.some(p => p.id == action.payload.id)) {
        return
      }
      state.panelData = [...state.panelData, {
        id: action.payload.id,
        componentTypeId: action.payload.componentTypeId ?? BodyTriageKey.empty,
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
        return { ...p, title: action.payload.name }
      })
    },
    transformPanel: (state, action: PayloadAction<TransformPanelPayload>) => {
      state.panelData = state.panelData.map(p => {
        if (p.id != action.payload.id) {
          return p
        }
        return { ...p, componentTypeId: action.payload.newComponentType }
      })
    }
  }
})

export const selectPanelData: ((panelId: string) => ((state: RootState) => SquareData | undefined)) = (panelId: string) => ((state: RootState) => state.squares.panelData.find((pd: SquareData) => pd.id == panelId))
export const selectSquares: ((state: RootState) => SquaresState) = (state: RootState) => state.squares
export const selectHasPluralPanels = (state: RootState) => state.squares.panelData.length > 1

export const { addPanel, storeGridJSON, deletePanels, renamePanel, transformPanel } = squaresSlice.actions

export default squaresSlice.reducer