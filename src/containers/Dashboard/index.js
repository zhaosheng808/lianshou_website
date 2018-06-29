/**
 * Created by DELL on 2017/11/10.
 */
import React, {Component} from 'react';

import banner from '@/assets/images/indexbg.jpg';
import product1 from '@/assets/images/ansuner_seat.jpg';
import './dashboard.scss';

export default
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        {id: '1', name: '名称1', src: ''},
        {id: '2', name: '名称2', src: ''},
        {id: '3', name: '名称3', src: ''},
        {id: '4', name: '名称4', src: ''}
      ]
    };
  }

  render() {
    const {data1} = this.state;
    return (
      <div className="dashboard">
        <div className="banner">
          <img src={banner}/>
        </div>
        <div className="home_products_wrapper app_main">
          <div className="products_item">
            <div className="home_products_title">
              <hr size='1' color="#000"/>
              <a href="javascript: void(0)">
                <div className="home_feature_box">
                  <span className="home_feature_box_title">新品上市</span>
                  <span className="home-featured_title_vice">经典奢华</span>
                </div>
              </a>
            </div>
            <div className="home_products_list">
              {data1.map((item, index) => {
                return <div className="home_product_box" key={index}>
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                  <div className="product_box_bottom">
                    <div className="product_info">{item.name}</div>
                    <div className="see_more">查看更多</div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="home_products_wrapper app_main">
          <div className="products_item">
            <div className="home_products_title">
              <hr size='1' color="#000"/>
              <a href="javascript: void(0)">
                <div className="home_feature_box">
                  <span className="home_feature_box_title">推荐产品</span>
                  <span className="home-featured_title_vice">经典奢华</span>
                </div>
              </a>
            </div>
            <div className="home_products_list">
              {data1.map((item, index) => {
                return <div className="home_product_box" key={index}>
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                  <div className="product_box_bottom">
                    <div className="product_info">{item.name}</div>
                    <div className="see_more">查看更多</div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="home_products_wrapper app_main">
          <div className="products_item">
            <div className="home_products_title">
              <hr size='1' color="#000"/>
              <a href="javascript: void(0)">
                <div className="home_feature_box">
                  <span className="home_feature_box_title">经典案例</span>
                  <span className="home-featured_title_vice">经典奢华</span>
                </div>
              </a>
            </div>
            <div className="home_products_list">
              {data1.map((item, index) => {
                return <div className="home_product_box" key={index}>
                  <div className="home_product_image image_box">
                    <img src={product1}/>
                  </div>
                  <div className="product_box_bottom">
                    <div className="product_info">{item.name}</div>
                    <div className="see_more">查看更多</div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
