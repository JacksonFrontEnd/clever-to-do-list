import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { App } from "./App";


firebase.initializeApp({
  apiKey: "AIzaSyDGuv0AvM6cyESCuDdcFiEP5b4MuIWDZK0",
  authDomain: "clever-to-do-list-b753b.firebaseapp.com",
  databaseURL: "https://clever-to-do-list-b753b-default-rtdb.firebaseio.com",
  projectId: "clever-to-do-list-b753b",
  storageBucket: "clever-to-do-list-b753b.appspot.com",
  messagingSenderId: "707719034315",
  appId: "1:707719034315:web:ef96b9f5f642c128a8324e",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
export const Context = createContext({
  firebase,
  auth,
  firestore,
});
ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>,

  document.getElementById("root")
);
