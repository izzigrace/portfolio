import React from "react";
import './Sdc.css';
import SdcThree from './SdcThree.jsx';
import link from './logos/link.png';
import github from './logos/githubLogo.png';

function Sdc() {
  return (
    <div className="sdc">
      <SdcThree classname="wholeSDCModelComponent" />
      <div className="wordsSDC">
        <div className="qandaAndTech">
          <div className="techStackSDC">
            Node · Express.js · PostgreSQL · NGINX · AWS
          </div>
          <div className="qanda">
            Qanda
          </div>
        </div>
        <div className="descriptionSDC">
          an optimized backend of a retail website built to withstand thousands of clients at once
        </div>
        <div className="linksSDC">
          <div className="lineDivSDC"></div>
          <img src={github} className="githubSDC" ></img>
          <img src={link} className="linkSDC" ></img>
        </div>
      </div>
    </div>
  )
}

export default Sdc;
