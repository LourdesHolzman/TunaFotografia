import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import cursor context provider
import CursorProvider from "./context/CursorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CursorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CursorProvider>,
);
