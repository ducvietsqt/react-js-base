// import '../assets/App.css';
// import {
//   Route, Switch, Redirect,
// } from 'react-router-dom'
// import withLayout, { AppLayout, DefaultLayout, AuthLayout } from '../layouts'
// import Products from '../pages/products'
// import Product from '../pages/_product'
// import SignIn from '../pages/signIn'
// import PageNotFound from '../pages/404'
//
// export default function () {
//   return (
//     <div>
//       <Switch>
//         <Route path="/auth/signin" component={withLayout(SignIn, AuthLayout)}/>
//       </Switch>
//       <Switch>
//         <Route path="/products" component={withLayout(Products, AppLayout)}/>
//         <Route path="/products/:id" component={withLayout(Product, AppLayout)} />
//         <Route path="*" component={PageNotFound}/>
//       </Switch>
//     </div>
//   )
// }

import React, {lazy} from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const Product = lazy(() => import("../pages/ProductsPage"));
const SignIn = lazy(() => import("../pages/SigninPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

const authRoutes = [
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage/>,
  },
];

const appRoutes = [
  {
    path: '/products',
    exact: true,
    main: () => <Product/>,
  },
];

const defaultRoutes = [
  {
    path: '/signIn',
    exact: true,
    main: () => <SignIn/>,
  },
  {
    path: '/',
    exact: true,
    main: () => <HomePage/>,
  },
]

export {appRoutes, defaultRoutes, authRoutes};
