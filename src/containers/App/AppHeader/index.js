/**
 * Created by DELL on 2017/11/20.
 */
import React, {Component} from 'react';
import NavBar from '../NavBar';
import './index.scss';

export default
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routers: [
        {name: '首页', path: '/'},
        {name: '产品中心', path: '/products'},
        {name: '客户案列', path: '/case'},
        {name: '关于我们', path: '/about'},
      ]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="app_header">
        <div className="app_main">
          <div className="logo_box">
            <div className="top_logo"/>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}
