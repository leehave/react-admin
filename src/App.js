import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'zent/css/index.css';
import Header from './layouts/Header/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
