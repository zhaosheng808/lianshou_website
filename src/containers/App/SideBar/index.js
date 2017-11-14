import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default
class SideBar extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    const sideBar = {
      width: '240px',
      float: 'left'
    }
    return (
      <div className="sideBar" style={sideBar}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="setting" /><span>菜单</span></span>}>
            <Menu.Item key="1"><Link to='/'>工作台</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/home'>home</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/404'>404</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/login'>登录</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}