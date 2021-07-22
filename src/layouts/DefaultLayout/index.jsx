import {defaultRoutes} from "../../routes";
import Header from "../../components/Header";
import {Route} from "react-router-dom";
import React, {Suspense} from "react";

const DefaultLayout = () => {
  return (
    <div className="layout layout--auth">
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {
            defaultRoutes.map(({path, exact, main}, index) => {
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

export default DefaultLayout;