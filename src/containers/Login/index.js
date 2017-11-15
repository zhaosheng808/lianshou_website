/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react';
import { Button, Form, Input } from 'element-react';
// import style from './index.css';
import { connect } from 'react-redux';
import {login} from '../../redux/actions';
require('./index.css');

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        name: '',
        password: ''
      }
    };
  }
  componentDidMount () {
    // console.log(login)
  }
  onSubmit = () => {
    // e.preventDefault();
    // console.log(this.state.form, 'das');
    this.props.dispatch(login());
    this.props.history.push('/');

  };
  onChange = (key, value) => {
    this.state.form[key] = value;
    this.forceUpdate();
  };
  render() {
    return (
      <div className="login">
        <div className='login_form'>
          <h3>聚焦企业版登录</h3>
          <Form model={this.state.form} labelWidth="80">
            <Form.Item label="账号">
              <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} />
            </Form.Item>
            <Form.Item label="密码">
              <Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} />
            </Form.Item>
          </Form>
          <Button type="primary" onClick={this.onSubmit}>登录</Button>
        </div>
      </div>
    );
  }
}
export default  connect(state => state)(Login);