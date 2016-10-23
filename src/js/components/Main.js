import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';

const Main = React.createClass({
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
});

export default Main;