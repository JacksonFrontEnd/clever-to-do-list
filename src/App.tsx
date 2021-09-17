import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from ".";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  return loading ?  <Loader/> :
  (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
