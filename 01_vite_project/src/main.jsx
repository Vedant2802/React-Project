/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

// const myName = "Akshat Vedant";

function MyApp() {
  return <h1>Vedant</h1>;
}
// const customElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "this is google.com"
//   // myName
//   // "Akshat Vedant"
// );
createRoot(document.getElementById("root"))
  .render
  // <StrictMode>
  // <App />
  // customElement
  // <MyApp />
  // Since at the end of the day the react components are functions itself you can write it like this , but this is not a good practice
  // MyApp()
  // </StrictMode>
  ();
