import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Parent from "./parent.jsx";

// createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(<Parent />);
