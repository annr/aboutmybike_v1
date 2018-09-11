const React = require('react');
import { Link } from 'react-router-dom';

const GridItem = (props) => {
  const photo = "/dist/images/mock/bike" + props.id + ".jpg";
  const link = "/view/" + props.id;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-photo-wrapper">
          <Link to={link}>
            <img className="card-photo" src={photo} alt={props.brand} />
          </Link>
        </div>
        <div className="card-block">
          <h5 className="card-title">{props.brand} {props.model}</h5>
          <p className="card-text"></p>
          <Link to={link}>View Bike</Link>
        </div>
      </div>
    </div>
  );
};

export default GridItem;