import {authRoutes} from "../../routes";
import Header from "../../components/Header";
import {Redirect, Route} from "react-router-dom";
import {isLogin} from "../../auth";
import React, {Suspense} from "react";

const AuthLayout = () => {
  return isLogin() ? (<Redirect to={'/'}/>) :
    (
      <div className="layout layout--auth">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            {
              authRoutes.map(({path, exact, main}, index) => {
                return (
                  <Route key={index} path={path} exact={exact} component={main}/>
                );
              })
            }
          </div>
        </Suspense>
      </div>
    )
}

export default AuthLayout;
