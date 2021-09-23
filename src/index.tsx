import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import App from "./components/App";

const store = createStore(rootReducer);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(
  <BrowserRouter>{app}</BrowserRouter>,
  document.getElementById("root")
);
