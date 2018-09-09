import React from 'react';
export default React.createClass({
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    let username = 'username';
    return (
      <div className="generic-container">
        <h1>{username}'s {this.props.brand} {this.props.model}</h1>
        <div className="bike-photo-wrapper">
          <img src={photo} width="600" alt={this.props.brand} />
        </div>
        <dl className="bike-details">
          <dt>Style</dt>
          <dd>{this.props.style}</dd>
          <dt>Color</dt>
          <dd>{this.props.color}</dd>
          <dt>Brakes</dt>
          <dd>{this.props.brakes}</dd>
          <dt>Speeds</dt>
          <dd>{this.props.speeds}</dd>
          <dt>Handlebars</dt>
          <dd>{this.props.handlebars}</dd>
        </dl>
      </div>
    );
  }
})
