import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from "react";

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
const AppContext = createContext({
  firebase,
  auth,
  firestore,
});

export { auth, firestore, AppContext };