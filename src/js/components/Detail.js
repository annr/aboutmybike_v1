const React = require('react');
const data = require('json!../../fixtures/bikes');
import DetailAll from './DetailAll';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.serverRequest = $.ajax({
      url: 'http://localhost:3030/bike/find/' + this.props.params.bikeId,
      success: (res) => {
        this.setState(res.data);
      }
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
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