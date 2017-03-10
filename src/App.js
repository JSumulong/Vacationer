import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import VacationCard from './VacationCard';
import Slider from './Slider';


class App extends Component {
  render() {
  	const appStyle = {
  		"backgroundColor": "white"
  	}
    return (
      <div className="App" style={appStyle}>
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
