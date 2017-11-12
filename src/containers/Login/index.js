/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>Login---登陆页面</h1>
        <Link to="/">index</Link>
      </div>
    );
  }
}
