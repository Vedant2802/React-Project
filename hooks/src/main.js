import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Family from "./Family.js";
import Context from "./Context.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Context />
  </StrictMode>
);
