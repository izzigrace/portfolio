import { useState, useEffect } from 'react';
import React from "react";
import './Menu.css';
import logo from './logos/izziLogoWhite.png';
import menuLines from './logos/menuLines.png';

function Menu() {

  return (
    <div className="menu">
      {/* <div className="popOutMe">
        <img src={logo} className="greenLogo"></img>
        <div className="justMenuNoLogo">
          <a href="url" className="link">LinkedIn</a>
          <div className="dot">·</div>
          <a href="url" className="link">GitHub</a>
          <div className="dot">·</div>
          <a href="url" className="link">Resume</a>
        </div>
      </div> */}
      {/* <div className="popOutMenu">
        <div className="justMenusMenuNoLogo">
          <a href="url" className="menusLink">About</a>
          <div className="dot">·</div>
          <a href="url" className="menusLink">Projects</a>
          <div className="dot">·</div>
          <a href="url" className="menusLink">Contact</a>
        </div>
        <img src={menuLines} className="greenMenu"></img>
      </div> */}

      <img src={logo} className="logo"></img>
      <img src={menuLines} className="menuLines"></img>
    </div>
  );
}

export default Menu;