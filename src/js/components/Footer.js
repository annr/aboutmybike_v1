import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <hr />
          <p>Please send us your&nbsp;
            <Link to="/feedback">Feedback / Questions</Link>
          </p>
          <p>©2016 AboutMyBike.com</p>
        </footer>
      </div>
    );
  }

}

module.exports = Footer;