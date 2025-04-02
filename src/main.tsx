import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store/redux/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
// import { TestBodyEditor } from "./app/dev/TestBodyEditor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/swissarmytab" element={<App />} />
          {/* Turn this route off in production */}
          {/* <Route path="/swissarmytab/develop/editor/:panelId" element={<TestBodyEditor/>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
