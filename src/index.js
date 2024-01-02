import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./style/GlobalStyled";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);
