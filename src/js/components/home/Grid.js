import React from 'react';
import data from '../../../data/bikes.json';
import GridItem from './GridItem';
import Header from '../template/Header';
import Footer from '../template/Footer';

const Grid = () => (
  <div>
    <Header />
    <div className="bikes row">
      {data.Bikes.map(bike => (<GridItem key={bike.id} {...bike} />))}
    </div>
    <Footer />
  </div>
);

//Grid.componentDidMount = () => {
//this.setState({ results: staticBikes.Bikes });
// removed jQuery so we'll have to make this request to the API another way.
/*
    $.ajax({
      url: "/api/bikes",
      success: function (data) {
        _self.setState({ results: data });
      }
    });
*/
//};


export default Grid;
