import React, { Component } from 'react'
import { DefaultLayout } from './default'
import {  AuthLayout } from './auth'
import {  AppLayout } from './app'
export {
  DefaultLayout, AuthLayout, AppLayout
}
export default function withLayout(View, Layout) {
  return class extends Component {
    render() {
      return (
        <Layout>
          <View />
        </Layout>
      )
    }
  }
}


