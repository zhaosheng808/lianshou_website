import React, {Component} from 'react';

export default
class NavBar extends Component {
  render() {
    const head_style = {height: '60px',
      background: '#00d0bd',
      lineHeight: '60px',
      textAlign: 'left'
    };
    return (
      <div className="nav-bar" style={head_style}>
        <div>头部</div>
      </div>
    );
  }
}
