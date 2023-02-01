import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List from "./components/screens/todolist/list";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  font-family: monaco;
  text-align: center;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <List />
  </React.StrictMode>
);
