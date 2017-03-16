import React, { Component } from 'react';
import './App.css';
import data from './data';
import VacationCard from './VacationCard/VacationCard';
import Slider from './Slider/Slider';
import Header from './Header/Header';
import TopSlider from './TopSlider/TopSlider';
import Testimonies from './Testimonies/Testimonies';
import Footer from './Footer/Footer';
import DisclaimerModal from './Modals/DisclaimerModal';

class App extends Component {
  render() {
  	const appStyle = {
  		"backgroundColor": "white",
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
        <Footer />
        <DisclaimerModal />
      </div>
    );
  }
}

export default App;
