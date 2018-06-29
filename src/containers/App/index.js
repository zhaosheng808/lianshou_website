import React, {Component} from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import AppHeader from './AppHeader'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import Footer from '@/containers/App/Footer'
import About from '@/containers/About'
import Home from '../Home'
import Products from '@/containers/Products'
import ProductInfo from '@/containers/ProductInfo'
import './App.css';

import { connect } from 'react-redux';
import {login} from '@/redux/models/admin';
import {add} from '@/redux/models/other';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
  }
  _changeName = () => {
    this.props.add();
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="app_content">
          {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/products" component={Products}/>
            <Route path="/product/:id" component={ProductInfo}/>
            <Route path="/404" component={NotFound}/>
            <Redirect path="*" to="404"/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}



export default connect(state => ({admin: state.admin, number: state.other.number}), {login, add}, null, {pure: false})(App);