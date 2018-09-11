import React from 'react';

const DetailAll = (props) => {
  const photo = "/dist/images/mock/bike" + props.id + ".jpg";
  const username = 'username';
  return (
    <div className="generic-container">
      <h1>{username}'s {props.brand} {props.model}</h1>
      <div className="bike-photo-wrapper">
        <img src={photo} width="600" alt={props.brand} />
      </div>
      <dl className="bike-details">
        <dt>Style</dt>
        <dd>{props.style}</dd>
        <dt>Color</dt>
        <dd>{props.color}</dd>
        <dt>Brakes</dt>
        <dd>{props.brakes}</dd>
        <dt>Speeds</dt>
        <dd>{props.speeds}</dd>
        <dt>Handlebars</dt>
        <dd>{props.handlebars}</dd>
      </dl>
    </div>
  );
};

export default DetailAll;
