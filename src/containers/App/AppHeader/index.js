/**
 * Created by DELL on 2017/11/20.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.scss';

export default
class AppHeader extends Component {
  render() {
    return (
      <div className="app_header">
        <div className="app_main">
          <div className="logo_box">
          <div className="top_logo" />
          </div>
        </div>
        <div className="nav_box_wrapper">
          <div className="nav_box">
            <ul className="clear">
              <li className="active"><Link to='/'>首页</Link></li>
              <li><Link to='/'>产品中心</Link></li>
              <li><Link to='/'>客户案列</Link></li>
              <li><Link to='/'>关于我们</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
