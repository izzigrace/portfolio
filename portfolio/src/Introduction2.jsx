import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import React from "react";
import './Introduction2.css';

function Introduction2() {
  return (
    <div className="App">
      <div className="helloWorldIAm">
        HELLO WORLD! I AM:
      </div>
      <div className="isabelleSmith2">Isabelle Smith</div>
      <div className="aFullStackSE">
        A Full Stack Software Engineer.
        <Typed
          strings={['']}
              typeSpeed={40}
              >
        </Typed>
        </div>
      </div>
  );
}

export default Introduction2;