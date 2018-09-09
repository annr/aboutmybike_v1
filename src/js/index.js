import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import Grid from './components/Grid';
import Add from './components/Add';
import Detail from './components/Detail';

const { Router, Route, hashHistory, IndexRoute } = require('react-router');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Grid}></IndexRoute>
      <Route path="/add" component={Add}></Route>
      <Route path="/view/:bikeId" component={Detail} />
    </Route>
  </Router>
), document.getElementById("target"));
