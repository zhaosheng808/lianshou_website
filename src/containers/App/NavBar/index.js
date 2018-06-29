import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

export default
class NavBar extends Component {
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
  _quit = () => {
    console.log('退出');
  };
  onSelect() {

  };
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
    );
  }
}
