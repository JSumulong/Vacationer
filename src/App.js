import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VacationCard from './VacationCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VacationCard image="https://images.unsplash.com/photo-1477915737647-b5246ee6de6f?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop="/>
      </div>
    );
  }
}

export default App;
