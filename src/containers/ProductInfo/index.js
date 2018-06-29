/**
 * Created by DELL on 2018/6/29.
 */
import React, { Component } from 'react';
import {Breadcrumb} from 'element-react';

export default
class ProductInfo extends Component {
  render() {
    const id = this.props.match.params.id;
    console.log(id);
    return (
      <div className="productInfo_wrapper app_main">
        <h1>产品详情</h1>
        <Breadcrumb separator="/">
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>产品中心</Breadcrumb.Item>
          <Breadcrumb.Item>{id}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}