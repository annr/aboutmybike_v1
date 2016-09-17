const React = require('react');
const preload = require('json!../fixtures/bikes');
const _ = require('lodash');
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
      <div className="mdl-layout__tab-panel is-active" id="overview">
        {this.state.results.map((el) => {
          return (
            <BikeListItem
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

module.exports = App;