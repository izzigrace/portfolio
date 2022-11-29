import { useState, useEffect } from 'react';
import Introduction2 from './Introduction2.jsx';
import gif from './loadingGif/blobLoader.gif';

function About() {
  return (
    <div className="about">
      <Introduction2 />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and detail oriented software engineer who employs intuition and creativity when problem-solving, searching for solutions from multiple angles. I thrive both working independently and in a collaborative environment. Scroll to read more about me, or hover over the top right and left corners to navigate to other parts of my website!
        </div>
      </div>
    </div>
  );
}

export default About;