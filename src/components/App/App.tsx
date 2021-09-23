import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.scss';
import AppRouter from '../AppRouter';
import { Loader } from '../Loader';
import Navbar from '../Navbar';
import { useMySelector } from '../../hooks/useMySelector';

const App = (): JSX.Element => {
  const { auth } = useMySelector((state) => state.authFirebase);
  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
export { App };
