import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<Router>*/}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </p>
      </div>
    );
  }
}

export default App;