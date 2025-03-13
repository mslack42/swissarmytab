import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from "./slices/editorsSlice";
import squaresReducer from "./slices/squaresSlice";

const reducer = {
    editors: editorsReducer,
    squares: squaresReducer
}

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;