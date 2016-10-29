import React from 'react';
const GridItem = require('./GridItem');

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.results = [];
  }

  componentDidMount() {
    var _self = this;
    $.ajax({
       url: "/api/bikes",
       success: function(data)
       {
         _self.setState({results:data.data});
       }
     });
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
