import React from 'react';

class Footer extends React.Component {
  getCopyrightYear() {
    return (new Date()).getFullYear();
  }

  render() {
    return (
      <div>
        <footer>
          <hr />
          <p>&copy;{this.getCopyrightYear()} AboutMyBike.com</p>
        </footer>
      </div>
    );
  }
}

module.exports = Footer;