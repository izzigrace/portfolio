import React from "react";
import './Goalseekr.css';
import GoalseekrThree from './GoalseekrThree.jsx';
import link from './logos/link.png';
import github from './logos/githubLogo.png';

function Goalseekr() {
  return (
    <div className="allGoalseekr">
      <div className="wordsGoalseekr">
        <div className="goalseekrAndTech">
          <div className="goalseekr">
            Goalseekr
          </div>
          <div className="techStackGoalseekr">
            Redux.js · PostgreSQL · React.js · JavaScript
          </div>
        </div>
        <div className="descriptionGoalSeekr">
          a live multiplayer, motivational habit tracking game inspired by habitica and spaceward ho
        </div>
        <div className="links">
          <img src={github} className="github" ></img>
          <img src={link} className="link" ></img>
          <div className="lineDivGoalseekr"></div>
        </div>
      </div>
      <GoalseekrThree classname="wholeGoalseekrModelComponent" />
    </div>
  )
}

export default Goalseekr;
