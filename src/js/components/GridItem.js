const React = require('react');
const Link = require('react-router').Link;

class GridItem extends React.Component {
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    let link = "/view/" + this.props.id;
    let description = "placeholder";
    return (
      <div>
        <Link to={link}>
          <img src={photo} width="300" height="225" alt={this.props.brand} />
        </Link>
        <h4>{this.props.brand} {this.props.model}</h4>
        {description}
        <Link to={link}>About This Bike</Link>
      </div>
    );
  }

}

module.exports = GridItem;