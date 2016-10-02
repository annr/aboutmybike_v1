import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
const preload = require('json!../fixtures/bikes');
const BikeListItem = require('./BikeListItem');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: _.clone(preload.Bikes)
    };
  }
  render() {
    return(
      <div>
        <Header />
        {this.state.results.map((el) => {
          return (
            <BikeListItem
              key={el.id}
              id={el.id}
              {...el}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

module.exports = App;