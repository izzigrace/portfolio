import React from "react";
import './NotNaked.css';
import NotNakedThree from './NotNakedThree.jsx';
import link from './logos/link.png';
import github from './logos/githubLogo.png';

function NotNaked() {
  return (
    <div className="allNotNaked">
      <div className="wordsNotNaked">
        <div className="notNakedAndTech">
          <div className="notNaked">
            Goalseekr
          </div>
          <div className="techStackNotNaked">
            Redux.js · PostgreSQL · React.js · JavaScript
          </div>
        </div>
        <div className="descriptionNotNaked">
          a live multiplayer, motivational habit tracking game inspired by habitica and spaceward ho
        </div>
        <div className="linksNotNaked">
          <img src={github} className="githubNotNaked" ></img>
          <img src={link} className="linkNotNaked" ></img>
          <div className="lineDivNotNaked"></div>
        </div>
      </div>
      <NotNakedThree classname="wholeNotNakedModelComponent" />
    </div>
  )
}

export default NotNaked;
