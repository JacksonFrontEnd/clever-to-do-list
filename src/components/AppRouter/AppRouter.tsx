import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from '../../routes';
import { CALENDAR_ROUTE, LOGIN_ROUTE } from '../../const/const';
import { useMySelector } from '../../hooks/useMySelector';

export const AppRouter = (): JSX.Element => {
  const { auth } = useMySelector((store) => store.authFirebase);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={CALENDAR_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};
