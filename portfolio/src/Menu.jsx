import { useState, useEffect } from 'react';
import React from "react";
import './Menu.css';
import logo from './logos/izziLogoWhite.png';
import menuLines from './logos/menuLines.png';

function Menu() {

  const [linkedInDiv, setLinkedInDiv] = useState(<div></div>);
  const [githubDiv, setGithubDiv] = useState(<div></div>);
  const [resumeDiv, setResumeDiv] = useState(<div></div>);
  const [menuDotOne, setMenuDotOne] = useState(<div></div>);
  const [menuDotTwo, setMenuDotTwo] = useState(<div></div>);

  function rollOutMeMenu () {
    setTimeout(() => {
      setLinkedInDiv(<a href="https://www.linkedin.com/in/isabelle-smith6/" className="linkedInLink" target="_blank" rel="noreferrer">LinkedIn</a>);
    }, 30);
    setTimeout(() => {
      setMenuDotOne(<div className="menuDot">·</div>);
    }, 60);
    setTimeout(() => {
      setGithubDiv(<a href="https://github.com/izzigrace" className="githubLink" target="_blank" rel="noreferrer">GitHub</a>);
    }, 90);
    setTimeout(() => {
      setMenuDotTwo(<div className="menuDot">·</div>);
    }, 120);
    setTimeout(() => {
      setResumeDiv(<a href="https://drive.google.com/file/d/1dwkvLmwZ1wfzVQhS0W7JDEOkVxkMh2uw/view?usp=share_link" className="resumeLink" target="_blank" rel="noreferrer">Resume</a>);
    }, 150);
  };

  function menuGoAway () {
    setLinkedInDiv(<div></div>);
    setMenuDotOne(<div></div>);
    setGithubDiv(<div></div>);
    setMenuDotTwo(<div></div>);
    setResumeDiv(<div></div>);
  }

  return (
    <div className="menu">
      <div className="popOutMe">
        <img src={logo} className="logo" onMouseOver={() => {rollOutMeMenu()}}></img>
        {linkedInDiv}
        {menuDotOne}
        {githubDiv}
        {menuDotTwo}
        {resumeDiv}
      </div>

      <div className="popOutMenu">
        <a href="url" className="menusLink" >About</a>
        <div className="dot">·</div>
        <a href="url" className="menusLink">Projects</a>
        <div className="dot">·</div>
        <a href="url" className="menusLink">Contact</a>
        <img src={menuLines} className="menuLines"></img>
      </div>

      <div className="divThatHelpsMenuGoAway" onMouseOver={() => {menuGoAway()}}></div>

    </div>
  );
}

export default Menu;