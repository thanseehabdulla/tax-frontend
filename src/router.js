import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard";

import React from "react";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;
