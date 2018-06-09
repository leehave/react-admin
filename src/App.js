import React,{ Component } from 'react';
import './App.css';
import 'zent/css/index.css';
import { Layout } from 'zent';
import Header from './layouts/Header/Header'
import Applayout from './layouts/Applayout/Applayout'

const { Row } = Layout;
class App extends Component {
  state = {
      collapsed: false,
  };
  toggle = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
  };
  render() {
    return (
      <div className="App">
        <Header collapsed={this.state.collapsed} />
        <Applayout toggle={this.toggle} collapsed={this.state.collapsed} />
      </div>
    );
  }
}

export default App;
