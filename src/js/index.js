const React = require('react');
const preload = require('json!../fixtures/bikes');
const _ = require('lodash');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: _.clone(preload)
    };
  }
  render() {
    return(
      // <div className="app-container">
      //   <h1>Bikes</h1>
      //   <div className="bikes-list">
      //     {this.state.results.map((el) => {
      //       return (
      //         <li>{{el}}</li>
      //       );
      //     })}
      //   </div>
      // </div>
      <span>Recently added</span>
    );
  }
}

module.exports = App;