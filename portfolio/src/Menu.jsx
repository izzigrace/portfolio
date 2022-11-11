import { useState, useEffect } from 'react';
import React from "react";
import './Menu.css';
import logo from './logos/izziLogoWhite.png';
import menuLines from './logos/menuLines.png';

function Menu() {

  return (
    <div className="menu">
      <img src={logo} className="logo"></img>
      <img src={menuLines} className="menuLines"></img>
    </div>
  );
}

export default Menu;