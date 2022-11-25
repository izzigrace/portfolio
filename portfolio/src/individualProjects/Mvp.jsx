import React from "react";
import './Mvp.css';
import MvpThree from './MvpThree.jsx';
import link from './logos/link.png';
import github from './logos/githubLogo.png';

function Mvp() {
  return (
    <div className="mvp">
      <MvpThree classname="mvpModel" />
      <div className="words">
        <div className="cubeAndTech">
          <div className="techStack">
            Node · Express.js · React · Three.js · MongoDB
          </div>
          <div className="cube">
            Cube
          </div>
        </div>
        <div className="description">
          an interactive and solveable 3d rubik's like cube with smooth animations, a leaderboard, and shuffle/solve buttons
        </div>
        <div className="linksMVP">
          <div className="lineDivMVP"></div>
          <img src={github} className="githubMVP" ></img>
          <img src={link} className="linkMVP" ></img>
        </div>
      </div>
    </div>
  )
}

export default Mvp;
