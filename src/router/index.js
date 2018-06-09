import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '@/components/Dashboard/Dashboard';
import Setting from '@/components/Setting/Setting';
import NotFound from '@/components/NotFound/NotFound';
import '@/layouts/mixin.scss'
  // 路由鉴权 ... 省略
  export default class CRouter extends Component {
  render() {
    return (
      <div className="contentBody">
        <Switch>
          <Route exact path="/app/dashboard/index" component={Dashboard} />
          <Route exact path="/app/setting" component={Setting} />
          <Route exact path="/app/404" component={NotFound} />
        </Switch>
      </div>
    )
  }
}
