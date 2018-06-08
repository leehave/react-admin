import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
export default class RouterConfig {
  // 路由鉴权 ... 省略
  render {
    return (
      <Switch>
        <Route exact path="/app/dashboard/index" component={Dashboard} />
      </Switch>
    )
  }
}
