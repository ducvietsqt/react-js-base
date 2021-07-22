import {appRoutes} from "../../routes";
import Header from "../../components/Header";
import {Redirect, Route} from "react-router-dom";
import {isLogin} from "../../auth";
import React, {Suspense} from "react";

const AppLayout = () => {
  return isLogin() ? (
      <div className="layout layout--auth">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            {
              appRoutes.map(({path, exact, main}, index) => {
                return (
                  <Route key={index} path={path} exact={exact} component={main}/>
                );
              })
            }
          </div>
        </Suspense>
      </div>
    ) :
    (
      <Redirect to={'/login'}/>
    )
}

export default AppLayout;