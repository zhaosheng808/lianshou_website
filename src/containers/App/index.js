import React, {Component} from 'react';
// import { Button } from 'antd';
import {
  // HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar'
import AppHeader from './AppHeader'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import Footer from '@/containers/App/Footer'
import About from '@/containers/About'
import Home from '../Home'
import './App.css';

import { connect } from 'react-redux';
// import * as action from '../../redux/actions';
import {login} from '@/redux/models/admin';
import {add} from '@/redux/models/other';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    // this.props.dispatch(action.hi());
    // console.log(this.state, 'state');
    // console.log(this.props, 'props');
    // console.log(login, 'login');
  }
  _changeName = () => {
    // this.props.dispatch(add())
    this.props.add();
  };
  render() {
    const contentStyle = {
      boxSizing: 'border-box',
      padding: '10px'
    };
    const {number} = this.props;
    // const { name = '未定义' } = this.props;
    return (
      <div className="App">
        <AppHeader/>
        <div className="app_content">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/404" component={NotFound}/>
            <Redirect path="*" to="404"/>
            {/*<Route component={NotFound}/>*/}
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}



export default connect(state => ({admin: state.admin, number: state.other.number}), {login, add}, null, {pure: false})(App);