const React = require('react');
const Link = require('react-router').Link;

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

module.exports = Header;

// <li className="nav-item active">
//   <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
// </li>