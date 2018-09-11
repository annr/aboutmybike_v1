import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <hr />
        <p>&copy;{(new Date()).getFullYear()} AboutMyBike.com</p>
      </footer>
    </div>
  );
};

export default Footer;