const React = require('react');

//import { Link } from 'react-router'
//const ReactRouter = require('react-router');
const Link = require('react-router').Link;

class BikeListItem extends React.Component {
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    let link = "/bikes/" + this.props.id;
    let description = "placeholder";
    return (
      <div>
        <img src={photo} width="300" height="225" alt={this.props.brand} />
        <h4>{this.props.brand} {this.props.model}</h4>
        {description}
        <a href="{link}">About this bike</a>
      </div>
    );
  }

}

module.exports = BikeListItem;