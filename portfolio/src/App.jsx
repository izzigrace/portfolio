import './App.css';
import AnimationPractice from './AnimationPractice';
import Typical from "react-typical";
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';
import Menu from './Menu.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Introduction />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and
          thrive on deep collaboration
          who likes to employ creative solutions to problems
          approach problems from multiple angles
          i am comfortable both working autonomously and working in groups and seeing other persepctives
        </div>
      </div>
      {/* <Projects /> */}
    </div>
  );
}

export default App;
