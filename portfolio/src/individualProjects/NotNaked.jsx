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
            NotNaked
          </div>
          <div className="techStackNotNaked">
            Redux · React · JavaScript · Express
          </div>
        </div>
        <div className="descriptionNotNaked">
        Front end to an e-commerce retail website with a Google Lighthouse performance of 92
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
