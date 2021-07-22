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
  {
    path: '/',
    exact: true,
    main: () => <HomePage/>,
  },
];

const defaultRoutes = [
  {
    path: '/signIn',
    exact: true,
    main: () => <SignIn/>,
  },
]

export {appRoutes, defaultRoutes, authRoutes};
