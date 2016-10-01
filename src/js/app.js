const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./index");

const { Router, Route, hashHistory } = require('react-router');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
  ), document.getElementById("target"));
