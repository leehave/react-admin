import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '@/components/NotFound/NotFound';
import App from './App';
export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
