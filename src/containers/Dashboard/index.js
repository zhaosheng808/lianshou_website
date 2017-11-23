/**
 * Created by DELL on 2017/11/10.
 */
import React, { Component } from 'react';
import banner from '@/assets/images/indexbg.jpg';
import product1 from '@/assets/images/ansuner_seat.jpg';
import './dashboard.css';
// import {
//   Switch,
//   Link,
//   Route
// } from 'react-router-dom';
// import Home from '../Home'
// import Login from '../Login'

export default
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>工作台</h1>
        <div className="banner">
          <img src={banner}/>
        </div>
        <div className="home_products_wrapper">
          <div className="home_products_title">
            <hr size='1' color="#000" />
            <a href="javascript: void(0)">
              <div className="home_feature_box">
                <span className="home_feature_box_title">家具</span>
                <span className="home-featured_title_vice">经典奢华</span>
              </div>
            </a>
          </div>
          <div className="home_products_list">
            <ul className="clear">
              <li>
                <div className="home_product_box">
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                </div>
              </li>
              <li>
                <div className="home_product_box">
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                </div>
              </li>
              <li>
                <div className="home_product_box">
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                </div>
              </li>
              <li>
                <div className="home_product_box">
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                </div>
              </li>
              <li>
                <div className="home_product_box">
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
