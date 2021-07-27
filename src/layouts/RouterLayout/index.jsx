import React from 'react'
import {Route, Router, Switch} from "react-router-dom";
import {appRoutes, authRoutes, defaultRoutes} from "../../routes";
import AuthLayout from "../AuthLayout";
import DefaultLayout from "../DefaultLayout";
import AppLayout from "../AppLayout";
import history from "../../routes/history";
import PageNotFound from "../../pages/ErrorPage";

const RouterLayout = () => {
  const authPath = authRoutes
    .map((item) => {
      return item.path;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  const appPath = appRoutes
    .map((item) => {
      return item.path;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  const defaultPath = defaultRoutes
    .map((item) => {
      return item.path;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={authPath}>
            <AuthLayout/>
          </Route>
          <Route exact path={appPath}>
            <AppLayout/>
          </Route>
          <Route exact path={defaultPath}>
            <DefaultLayout/>
          </Route>
          <Route exact path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default RouterLayout;