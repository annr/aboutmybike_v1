const React = require('react');
import DetailPhoto from './DetailPhoto';

class Detail extends React.Component {
  render() {
    return (
      <div>
        <DetailPhoto
          key={this.props.params.bikeId}
          id={this.props.params.bikeId}
          {...this.props.params}
        />
        {this.props.params.bikeId}
      </div>
    );
  }

}

module.exports = Detail;