import '../assets/App.css';
import {
  Route, Switch, Redirect,
} from 'react-router-dom'
import withLayout, { AppLayout, DefaultLayout, AuthLayout } from '../layouts'
import Products from '../pages/products'
import Product from '../pages/_product'
import SignIn from '../pages/signIn'
import PageNotFound from '../pages/404'

export default function () {
  return (
    <div>
      <Switch>
        <Route path="/auth/signin" component={withLayout(SignIn, AuthLayout)}/>
      </Switch>
      <Switch>
        <Route path="/products" component={withLayout(Products, AppLayout)}/>
        <Route path="/products/:id" component={withLayout(Product, AppLayout)} />
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  )
}


