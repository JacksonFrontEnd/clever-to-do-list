import React from 'react';
import {
  AppBar, Button, Grid, Toolbar,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LOGIN_ROUTE } from '../../const/const';
import { useMySelector } from '../../hooks/useMySelector';

export const Navbar = ():JSX.Element => {
  const { auth } = useMySelector((store) => store.authFirebase);
  const [user] = useAuthState(auth);
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container justifyContent="flex-end">
          {user ? (
            <NavLink to={LOGIN_ROUTE}>
              <Button onClick={() => auth.signOut()} variant="outlined">Выйти</Button>
            </NavLink>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="outlined">Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
