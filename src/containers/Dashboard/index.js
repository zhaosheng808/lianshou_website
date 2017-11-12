/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react';
import logo from '../../logo.svg';
// import {
//   Switch,
//   Link,
//   Route
// } from 'react-router-dom';
// import Home from '../Home'
// import Login from '../Login'

export default
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>工作台</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
