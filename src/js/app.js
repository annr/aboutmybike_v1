const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./index");

const { Router, Route, hashHistory } = require('react-router');

import Bikes from './src/js/bikes';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/" component={Bikes} />
  </Router>
  ), document.getElementById("target"));
