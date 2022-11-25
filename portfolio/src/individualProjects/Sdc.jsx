import React from "react";
import './Sdc.css';
import SdcThree from './SdcThree.jsx';

function Sdc() {
  return (
    <div className="sdc">
      <SdcThree classname="sdcModel" />
      <div className="words">
        <div className="qandaAndTech">
          <div className="qanda">
            Qanda
          </div>
          <div className="techStackSDC">
            Node · Express.js · PostgreSQL · NGINX · AWS
          </div>
        </div>
        <div className="descriptionSDC">
          and optimized backend of a retail website built to withstand thousands of clients at once
        </div>
      </div>
    </div>
  )
}

export default Sdc;
