import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import squaresReducer from "./slices/squaresSlice";
import editorConfigReducer from "./slices/editorConfigSlice";
import textStorageReducer from "./slices/textStorageSlice";

const reducer = {
  squares: squaresReducer,
  editorConfigs: editorConfigReducer,
  textStorage: textStorageReducer,
};
const persistConfig = {
  key: "swisstab",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducer),
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
