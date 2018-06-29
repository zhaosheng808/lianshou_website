/**
 * Created by DELL on 2017/11/20.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {matchPath} from 'react-router';
import classNames from 'classnames';
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

  componentWillReceiveProps(nextProps) {

  }

  get_hash_path = () => {
    const hash_path = window.location.hash;
    let hash_path_first = '/';
    if (hash_path) {
      const first_path_all = hash_path.split('/')[1];
      const first_path = first_path_all.split('?')[0];  // 一级路由
      hash_path_first = `/${first_path}`;
    }
    return hash_path_first;
  };

  render() {
    const {routers} = this.state;
    const path = this.get_hash_path();
    return (
      <div className="app_header">
        <div className="app_main">
          <div className="logo_box">
            <div className="top_logo"/>
          </div>
        </div>
        <div className="nav_box_wrapper">
          <div className="nav_box">
            <ul className="clear">
              {routers.map((item, index) => {
                return (<li className={classNames({'active': item.path === path})}
                            key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
