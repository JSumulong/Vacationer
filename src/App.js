import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import VacationCard from './VacationCard';
import Slider from './Slider';
import Header from './Header';
import LargeSlider from './LargeSlider';
import TopSlider from './TopSlider';


class App extends Component {
  render() {
  	const appStyle = {
  		"backgroundColor": "white"
  	}
    return (
      <div className="App" style={appStyle}>
        <TopSlider />
        <Header />
        <Slider content=
  	      {data.vacations
  	      	.map(location => {
  	      	return (
  	      		<VacationCard data={location} />
  	      	)
  	      })}
        />
      </div>
    );
  }
}

export default App;
