const React = require('react');
const bikes = require('json!../../fixtures/bikes').Bikes;
import DetailAll from './DetailAll';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state = bikes.find(function(b) {
      return  b.id === parseInt(props.params.bikeId);
    });
  }

  render() {
    return (
      <DetailAll
        key={this.props.params.bikeId}
        id={this.props.params.bikeId}
        {...this.state}
      />
    );
  }

}

module.exports = Detail;