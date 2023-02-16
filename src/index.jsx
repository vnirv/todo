import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List from "./components/screens/todolist/list";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { store } from "./store/index";

// PersistGate - обертка для localSrorage на redux'е

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
  <Provider store={store}>
    <Global />
    <List />
  </Provider>
);
