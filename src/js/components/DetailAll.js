import React from 'react';
export default React.createClass({
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    return (
      <div>
        <img src={photo} width="300" height="225" alt={this.props.brand} />
        <h1>{this.props.brand} {this.props.model}</h1>
        <dl>
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
         <dt>Style</dt>
         <dd>{this.props.style}</dd>
        </dl>
      </div>
    );
  }
})
