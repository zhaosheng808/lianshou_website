import React, {Component} from 'react';
// import { Button } from 'antd';
import {
  // HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Dashboard from '../Dashboard'
import Home from '../Home'
import './App.css';

export default class App extends Component {
  render() {
    const contentStyle = {
      marginLeft: '240px'
    };
    return (
      <div className="App">
        <NavBar/>

        <SideBar/>

        <div className="app-content" style={contentStyle}>
          <h1>app-content</h1>
          <Link to="/home">home</Link>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}
