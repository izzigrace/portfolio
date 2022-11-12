import { useState, useEffect } from 'react';
import React from "react";
import './Menu.css';
import logo from './logos/izziLogoWhite.png';
import menuLines from './logos/menuLines.png';

function Menu() {

  return (
    <div className="menu">
      <div className="popOutMe">
        {/* <img src={logo} className="greenLogo"></img> */}
        <div className="justMenuNoLogo">
          <a href="https://www.linkedin.com/in/isabelle-smith6/" className="link" target="_blank" rel="noreferrer">LinkedIn</a>
          <div className="dot">·</div>
          <a href="https://github.com/izzigrace" className="link" target="_blank" rel="noreferrer">GitHub</a>
          <div className="dot">·</div>
          <a href="https://drive.google.com/file/d/1dwkvLmwZ1wfzVQhS0W7JDEOkVxkMh2uw/view?usp=share_link" className="link" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
      <div className="popOutMenu">
        <div className="justMenusMenuNoLogo">
          <a href="url" className="menusLink" >About</a>
          <div className="menuDot">·</div>
          <a href="url" className="menusLink">Projects</a>
          <div className="menuDot">·</div>
          <a href="url" className="menusLink">Contact</a>
        </div>
        {/* <img src={menuLines} className="greenMenu"></img> */}
      </div>

      <img src={logo} className="logo"></img>
      <img src={menuLines} className="menuLines"></img>
    </div>
  );
}

export default Menu;