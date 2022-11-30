import { useState, useEffect } from 'react';
import Introduction2 from './Introduction2.jsx';
import gif from './loadingGif/blobLoader.gif';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
    className="about"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
      <Introduction2 />
      <div className="holdsAboutMe">
        <div className="aboutMe">
          I am a driven and detail oriented full stack software engineer who employs creativity when problem-solving, searching for solutions from multiple angles. I thrive both working independently and in a collaborative environment. Scroll to read more about me, or hover over the top right and left corners to navigate to other parts of my website!
        </div>
      </div>
    </motion.div>
  );
}

export default About;