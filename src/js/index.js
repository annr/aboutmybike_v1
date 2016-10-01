import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
//const BikeListItem = require('./BikeListItem');


class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

module.exports = App;