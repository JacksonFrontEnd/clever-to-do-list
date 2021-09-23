import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { CALENDAR_ROUTE, LOGIN_ROUTE } from "../../const/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { useMySelector } from "../../hooks/useMySelector";

export const AppRouter = () => {
  const { auth } = useMySelector(store => store.authFirebase);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CALENDAR_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
}
