/**
 * Created by DELL on 2017/11/14.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../redux/actions';
class HomeName extends Component {
  _changeName = () => {
    this.props.dispatch(action.add())
  };
  render() {
    const {other} = this.props;
    return (
      <div className="homename">
        <h2>home二级页面</h2>
        <button onClick={this._changeName}>add 1</button>
        <h2>number: {other.number}</h2>
        <h3>params.name: {this.props.match.params.name}</h3>
        {/*<h3>{this.props.match.params}</h3>*/}
      </div>
    );
  }
}
export default  connect(state => ({other: state.other}))(HomeName);
