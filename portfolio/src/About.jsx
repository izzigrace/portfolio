import { useState, useEffect } from 'react';
import Introduction from './Introduction.jsx';
import gif from './loadingGif/blobLoader.gif';

function About() {
  const [loadingDiv, setLoadingDiv] = useState(<img src={gif} className="gif"></img>);

  useEffect(() => {setLoadingDiv(<div></div>)}, []);


  return (
    <div className="about">
      {loadingDiv}
      <Introduction />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and detail oriented software engineer who employs intuition and creativity when problem-solving, searching for solutions from multiple angles. I thrive both working independently and in a collaborative environment. Scroll to read more about me, or hover over the top right and left corners to navigate to other parts of my website!
        </div>
      </div>
    </div>
  );
}

export default About;