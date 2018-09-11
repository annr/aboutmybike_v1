import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Grid from './components/home/Grid';
import Add from './components/add/Add';
import Detail from './components/view/Detail';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Grid} />
        <Route exact path="/add" component={Add} />
        <Route path="/view/:bikeId" component={Detail} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('target'));
