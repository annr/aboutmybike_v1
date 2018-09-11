const React = require('react');
import staticBikes from '../../../data/bikes.json';
import DetailAll from './DetailAll';
import Header from '../template/Header';
import Footer from '../template/Footer';

const Detail = (props) => {
  const bike = staticBikes.Bikes.find(function (b) {
    return b.id === 1;
  });
  return (
    <div>
      <Header />
      <DetailAll
        key={bike.bikeId}
        id={bike.bikeId}
        {...bike}
      />
      <Footer />
    </div>
  );
};

export default Detail;