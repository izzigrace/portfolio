import './App.css';
import AnimationPractice from './AnimationPractice';
import Typical from "react-typical";
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';
import Menu from './Menu.jsx';
import Blobs from './Blobs.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider className="App">
      <Blobs className="blobsComponent"/>
      <Menu />
      <Introduction />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and detail oriented software engineer who employs intuition and creativity when problem-solving, searching for solutions from multiple angles. I enjoy working independently but thrive in a collaborative environment because I love learning through the lens of those who share a common goal but have differing perspectives and aptitudes.
        </div>
      </div>
      {/* <Projects /> */}
    </ParallaxProvider>
  );
}

export default App;
