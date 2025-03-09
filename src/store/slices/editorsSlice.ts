import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const editorsSlice = createSlice({
    name: "editors",
    initialState,
    reducers: {
        incr: state => { state.value += 1 },
        incr2: (state, action: PayloadAction<number>) => { state.value += action.payload }
    }
})

export const { incr, incr2 } = editorsSlice.actions

export const selectVal = (state: RootState) => state.editors.value

export default editorsSlice.reducer