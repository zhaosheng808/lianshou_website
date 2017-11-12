/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react'
import {
  HashRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

import App from '../containers/App'
import Login from '../containers/Login'
// import Dashboard from '../containers/Dashboard'
import Home from '../containers/Home'

export default
class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/login">login</Link> <br/>
          <Link to="/">index</Link> <br/>
          <Link to="/home2">home2</Link>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/home2" component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}