import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SquareData } from "@/demos/squares/SquareData";
import { demoConfig } from "@/demos/demoConfig";

export interface SquaresState {
    gridJSON: string,
    panelData: SquareData[]
}

const initialState: SquaresState = demoConfig

type AddPanelPayload = {
  id: string,
  name: string
}

export const squaresSlice = createSlice({
    name: "squares",
    initialState,
    reducers: {
        addPanel: (state,action: PayloadAction<AddPanelPayload>) => {
          state.panelData = [...state.panelData, {
            id: action.payload.id,
            componentTypeId: "empty",
            title: action.payload.name,
            dataId: action.payload.id
          }]
        },
        storeGridJSON: (state, action: PayloadAction<string>) => {
          state.gridJSON = action.payload
        }
    }
})

export const selectPanelData = (panelId: string) => ((state: RootState) => state.squares.panelData.find(pd => pd.id == panelId))
export const selectSquares = (state:RootState) => state.squares

export const { addPanel, storeGridJSON } = squaresSlice.actions

export default squaresSlice.reducer