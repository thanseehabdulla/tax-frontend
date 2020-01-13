import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import Loadable from 'react-loadable';
import Loading from './components/stateful/loader';
import history from './history';
import React from "react";

const LoadableLogin = Loadable({
  loader: () => import('./containers/login'),
  loading: Loading,
});

const LoadableDashboard = Loadable({
  loader: () => import('./containers/dashboard'),
  loading: Loading,
});

const LoadableUserDashboard = Loadable({
  loader: () => import('./containers/userDashboard'),
  loading: Loading,
});

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoadableLogin} />
        <Route path="/dashboard" component={LoadableDashboard} />
        <Route path="/userdashboard" component={LoadableUserDashboard} />
        <Route path="/" component={LoadableLogin} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;
