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
import gif from './loadingGif/blobLoader.gif';

function App() {
  const [loadingDiv, setLoadingDiv] = useState(<img src={gif} className="gif"></img>);

  useEffect(() => {setLoadingDiv(<div></div>)}, []);


  return (
    <ParallaxProvider className="App">
      {loadingDiv}
      {/* <Blobs className="blobsComponent"/> */}
      <Menu />
      {/* <Introduction />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and detail oriented software engineer who employs intuition and creativity when problem-solving, searching for solutions from multiple angles. I thrive both working independently and in a collaborative environment. Scroll to read more about me, or hover over the top right and left corners to navigate to other parts of my website!
        </div>
      </div> */}
      <Projects className="projectsComponent"/>
    </ParallaxProvider>
  );
}

export default App;
