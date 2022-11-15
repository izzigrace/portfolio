import React from "react";
import './Mvp.css';
import MvpThree from './MvpThree.jsx';

function Mvp() {
  return (
    <div className="mvp">
      <MvpThree classname="mvpModel" />
      <div className="words">
        <div className="cubeAndTech">
          <div className="cube">
            Cube
          </div>
          <div className="techStack">
            Node · Express.js · React · Three.js · MongoDB
          </div>
        </div>
        <div className="description">
          an interactive and solveable 3d rubik's like cube with smooth animations, a leaderboard, and shuffle/solve buttons
        </div>
      </div>
    </div>
  )
}

export default Mvp;
