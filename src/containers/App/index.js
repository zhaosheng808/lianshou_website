import React, {Component} from 'react';
// import { Button } from 'antd';
import {
  // HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import Home from '../Home'
import './App.css';

import { connect } from 'react-redux';
import * as action from '../../redux/actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    // this.props.dispatch(action.hi());
    console.log(this.state, 'state');
    console.log(this.props, 'props');
  }
  _changeName(){
    this.props.dispatch(action.hi())
  }
  render() {
    const contentStyle = {
      marginLeft: '240px',
      boxSizing: 'border-box',
      padding: '10px'
    };
    console.log(this.props, 'render')
    const {name} = this.props;
    // const { name = '未定义' } = this.props;
    return (
      <div className="App">
        <NavBar/>

        <SideBar/>

        <div className="app-content" style={contentStyle}>
          <h1 style={{borderBottom:'1px solid #333'}}>app-content</h1>
          <h2>name: {name}</h2>
          <button onClick={this._changeName}>修改名字</button>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/404" component={NotFound}/>
            <Route path="/home" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default  connect(state => state)(App);