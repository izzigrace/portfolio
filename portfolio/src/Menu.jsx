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
  const [about, setAbout] = useState(<a href="url" className="menusLink" style={{visibility: "hidden"}} >About</a>);
  const [projects, setProjects] = useState(<a href="url" className="menusLink" style={{visibility: "hidden"}} >Projects</a>);
  const [contact, setContact] = useState(<a href="url" className="menusLink" style={{visibility: "hidden"}} >Contact</a>);
  const [dotOne, setDotOne] = useState(<div className="dot" style={{visibility: "hidden"}} >·</div>);
  const [dotTwo, setDotTwo] = useState(<div className="dot" style={{visibility: "hidden"}} >·</div>);

  function rollOutMeMenu() {
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

  function rollOutMenu() {
    setTimeout(() => {
      setContact(<a href="url" className="menusLink1" >Contact</a>);
    }, 30);
    setTimeout(() => {
      setDotTwo(<div className="dot">·</div>);
    }, 60);
    setTimeout(() => {
      setProjects(<a href="url" className="menusLink2">Projects</a>);
    }, 90);
    setTimeout(() => {
      setDotOne(<div className="dot">·</div>);
    }, 120);
    setTimeout(() => {
      setAbout(<a href="url" className="menusLink3" >About</a>);
    }, 150);
  }

  function menuGoAway () {
    setLinkedInDiv(<div></div>);
    setMenuDotOne(<div></div>);
    setGithubDiv(<div></div>);
    setMenuDotTwo(<div></div>);
    setResumeDiv(<div></div>);
    setAbout(<a href="url" className="menusLink" style={{visibility: "hidden"}} >About</a>);
    setDotOne(<div className="dot" style={{visibility: "hidden"}} >·</div>);
    setProjects(<a href="url" className="menusLink" style={{visibility: "hidden"}} >Projects</a>);
    setDotTwo(<div className="dot" style={{visibility: "hidden"}} >·</div>);
    setContact(<a href="url" className="menusLink" style={{visibility: "hidden"}} >Contact</a>);
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
        {about}
        {dotOne}
        {projects}
        {dotTwo}
        {contact}

        <img src={menuLines} className="menuLines" onMouseOver={() => {rollOutMenu()}}></img>
      </div>

      <div className="divThatHelpsMenuGoAway" onMouseOver={() => {menuGoAway()}} ></div>
      <div className="otherDivThatHelpsMenuGoAway" onMouseOver={() => {menuGoAway()}} ></div>

    </div>
  );
}

export default Menu;