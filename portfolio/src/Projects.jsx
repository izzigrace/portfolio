import React from "react";
import './Projects.css';
import Sdc from './individualProjects/Sdc.jsx';
import Goalseekr from './individualProjects/Goalseekr.jsx';
import Mvp from './individualProjects/Mvp.jsx';
import NotNaked from './individualProjects/NotNaked.jsx';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
    className="projectsComponent"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
      <Mvp className="projectsMVP" />
      <Goalseekr className="projectsGoalSeekr" />
      <Sdc className="projectsSDC" />
      <NotNaked className="projectsNotNaked" />
      <div className="emptyDivAtBottom" ></div>
    </motion.div>
  )
}

export default Projects;