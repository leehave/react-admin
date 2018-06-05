import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'zent/css/index.css';
import Header from './layouts/Header/Header'
import Applayout from './layouts/Applayout/Applayout'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Applayout />
      </div>
    );
  }
}

export default App;
