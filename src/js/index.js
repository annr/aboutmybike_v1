const React = require("react");
const ReactDOM = require("react-dom");

import Main from './components/Main';
import Grid from './components/Grid';
import Add from './components/Add';

const { Router, Route, hashHistory, IndexRoute } = require('react-router');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Grid}></IndexRoute>
      <Route path="/add" component={Add}></Route>
    </Route>
  </Router>
  ), document.getElementById("target"));
