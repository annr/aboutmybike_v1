import React from 'react';
import staticBikes from '../../data/bikes.json';

const GridItem = require('./GridItem');

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.results = [];
  }

  componentDidMount() {
    var _self = this;
    _self.setState({ results: staticBikes.Bikes });
    // removed jQuery so we'll have to make this request to the API another way.
    /*
        $.ajax({
          url: "/api/bikes",
          success: function (data) {
            _self.setState({ results: data });
          }
        });
    */
  }

  render() {
    console.log(this.state.results);
    return (
      <div className="row">
        {this.state.results.map((el) => {
          return (
            <GridItem
              key={el.id}
              id={el.id}
              {...el}
            />
          );
        })}
      </div>
    );
  }
}

module.exports = Grid;
