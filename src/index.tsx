import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
