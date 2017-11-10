/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from '../containers/App'
import Login from '../containers/Login'

export default
class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}