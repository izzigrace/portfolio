import Typical from "react-typical";
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import React from "react";
import './Introduction.css';

function Introduction() {

  const [nameDiv, setNameDiv] = useState(<div className="emptyDiv">Hi</div>);
  setTimeout(() => {
    setNameDiv(<div className="isabelleSmith">
    Isabelle Smith</div>);
  }, 2000);

  return (
    <div className="App">
      <div className="helloWorldIAm">
        Hello World! I am:
      </div>
      {nameDiv}
      <div className="aFullStackSE">
        <Typed
          strings={[
              '^5000A Front End Developer',
              'A Back End Developer',
              'A Full Stack Software Engineer.^5000']}
              typeSpeed={40}
              backSpeed={50}
              // loop
              >
        </Typed>
        </div>
      </div>
  );
}

export default Introduction;