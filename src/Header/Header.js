import React from 'react';
import Icon from './icon.money.png';
import './Header.css';
import Nav from '../Nav/Nav';


class Header extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
  return (
    <div className="header">
      <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
              <div className="container">
                  <h1 className="site-title">React Lite Level</h1>
                  <img src={Icon} className ="icon" alt="logo" />
                </div>
              </div>
         <Nav /> 
      </header>
    </div>
  );
 }
}

export default Header;
