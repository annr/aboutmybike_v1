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

/*  getInitialState() {
    return {
      results: []
    }
  },

  componentDidMount() {
      this.loadBikesFromServer();
  },

  loadBikesFromServer() {
    $.ajax({
      url: '/api/bikes',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({results: data.data});
      }.bind(this)
    });
  },*/