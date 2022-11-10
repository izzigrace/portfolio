import React from "react";
import './Goalseekr.css';
import GoalseekrThree from './GoalseekrThree.jsx';

function Sdc() {
  return (
    <div className="allGoalseekr">
      <div className="words">
        <div className="goalseekrAndTech">
          <div className="goalseekr">
            Goalseekr
          </div>
          <div className="techStack">
            Redux.js · PostgreSQL · React.js · JavaScript
          </div>
        </div>
        <div className="description">
          a live multiplayer, motivational habit tracking game inspired by habitica and spaceward ho
        </div>
      </div>
      <GoalseekrThree classname="wholeGoalseekrModelComponent" />
    </div>
  )
}

export default Sdc;
