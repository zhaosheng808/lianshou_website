/**
 * Created by DELL on 2017/11/10.
 */
import React, {Component} from 'react';
// import {Button, Form, Input, Notification} from 'element-react';

export default
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'change'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'change'}
        ],
      }
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="about">
       <h2>关于我们</h2>
      </div>
    );
  }
}

/*
 * connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
 * 它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
 * 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
 * */

/*
 * 通过mapDispatchToProps我们在页面调用的方式为`this.props.add()`
 * 如果省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中,
 * 则页面的调用方式为`this.props.dispatch(add())`
 * */