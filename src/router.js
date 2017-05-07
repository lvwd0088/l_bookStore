import React from 'react';
import { Router, Route,IndexRoute } from 'dva/router';

import App from "./routes/App.js";
import Home from "./routes/index/Home.js";
import User from "./routes/userManager/User.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/user" component={User} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
