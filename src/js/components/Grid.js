import React from 'react';
const preload = require('json!../../fixtures/bikes');
const GridItem = require('./GridItem');

// class Grid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       results: _.clone(preload.Bikes)
//     };
//   }
//   render() {
//     return(
//       <div>
//         {this.state.results.map((el) => {
//           return (
//             <GridItem
//               key={el.id}
//               id={el.id}
//               {...el}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

class Grid extends React.Component {
  render() {
    return (
      <div>
        Grid
      </div>
    );
  }

}

module.exports = Grid;
