// main.jsx
import React from "react";
import { createRoot } from "react-dom/client"; // React 18
import "./index.css";
import App from "./App.jsx";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const root = createRoot(document.getElementById("root")); // Note createRoot
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);