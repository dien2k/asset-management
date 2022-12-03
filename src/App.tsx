import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/scss/styles.scss";

import DefaultLayout from "layout/DefaultLayout";
import LoginPage from "views/Login";
import { RouteBase } from "constants/routeUrl";

const App: React.FC = () => {
  //! Render
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <Route path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
