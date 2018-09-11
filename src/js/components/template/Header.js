const React = require('react');
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">About My Bike</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/add"> &#43; Add Your Bike</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Header;
