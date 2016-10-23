import React from 'react';
const preload = require('json!../../fixtures/bikes');
const GridItem = require('./GridItem');

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: _.clone(preload.Bikes)
    };
  }
  render() {
    return(
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
