import React, { Component } from 'react';
import './App.css';
import data from './data';
import VacationCard from './VacationCard/VacationCard';
import Slider from './Slider/Slider';
import Header from './Header/Header';
import TopSlider from './TopSlider/TopSlider';
import Testimonies from './Testimonies/Testimonies';


class App extends Component {
  render() {
  	const appStyle = {
  		"backgroundColor": "white",
      // fontFamily: "'Josefin Sans', sans-serif"
      fontFamily: "'Pacifico', cursive"
  	}
    return (
      <div className="App" style={appStyle}>
        <TopSlider />
        <Header />
        <Slider content={data.vacations
  	      .map(location => {
  	      	return (
  	      		<VacationCard data={location} />
  	      	)
  	      })}
        />
        <Testimonies />
      </div>
    );
  }
}

export default App;
