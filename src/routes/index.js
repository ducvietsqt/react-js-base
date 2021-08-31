import '../assets/App.css';
import {
  Route, Switch,
} from 'react-router-dom'
import withLayout, { AppLayout, DefaultLayout, AuthLayout } from '../layouts'
import Home from '../pages/home'
import Products from '../pages/products'
import Product from '../pages/_product'
import SignIn from '../pages/signIn'
import PageNotFound from '../pages/404'

export default function () {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={withLayout(DefaultLayout, Home)} />
        <Route path="/auth/signin" component={withLayout(SignIn, AuthLayout)}/>
        <Route exact path="/products" component={withLayout(Products, AppLayout)}/>
        <Route exact path="/products/:id" component={withLayout(Product, AppLayout)} />
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  )
}


