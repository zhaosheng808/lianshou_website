import React, {Component} from 'react';
import { Menu } from 'element-react';
// import logo from '@/assets/images/Fruit-1.png';
import './index.css';

export default
class NavBar extends Component {
  _quit = () => {
    console.log('退出');
  };
  onSelect() {

  };
  render() {
    return (
      <div className="nav_bar app_main">
        <div className="app_menu">
          <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
            <Menu.Item index="1">首页</Menu.Item>
            <Menu.SubMenu index="2" title="产品中心">
              <Menu.Item index="2-1">选项1</Menu.Item>
              <Menu.Item index="2-2">选项2</Menu.Item>
              <Menu.Item index="2-3">选项3</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3">客户案列</Menu.Item>
            <Menu.Item index="4">关于我们</Menu.Item>
            <Menu.Item index="5">售后服务</Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
