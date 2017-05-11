import React from 'react';
import { Router, Route,IndexRoute } from 'dva/router';

import App from "./routes/App.js";
import Home from "./routes/index/Home.js";
import User from "./routes/userManager/User.js";
import BookLabel from "./routes/bookManager/label/Index.js";
import BookType from "./routes/bookManager/type/Index.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/user" component={User} />
        <Route path="/bookLabel" component={BookLabel} />
        <Route path="/bookType" component={BookType} />
      </Route>
      <Route path="/index" component={Index} />
    </Router>
  );
}

export default RouterConfig;
