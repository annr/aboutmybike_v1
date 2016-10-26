const React = require('react');
const Link = require('react-router').Link;

class GridItem extends React.Component {
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    let link = "/view/" + this.props.id;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-photo-wrapper">
            <Link to={link}>
              <img className="card-photo" src={photo} alt={this.props.brand} />
            </Link>
          </div>
          <div className="card-block">
            <h4 className="card-title">{this.props.brand} {this.props.model}</h4>
            <p className="card-text"></p>
            <Link to={link}>View Bike</Link>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = GridItem;