const React = require('react');
import staticBikes from '../../data/bikes.json';
import DetailAll from './DetailAll';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state = staticBikes.Bikes.find(function (b) {
      return b.id === parseInt(props.params.bikeId);
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