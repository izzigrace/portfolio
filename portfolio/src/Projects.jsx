import React from "react";
import './Projects.css';
import Sdc from './individualProjects/Sdc.jsx';
import Goalseekr from './individualProjects/Goalseekr.jsx';
import Mvp from './individualProjects/Mvp.jsx';
import NotNaked from './individualProjects/NotNaked.jsx';

function Projects() {
  return (
    <div className="projectsComponent">
      <Mvp className="projectsMVP" />
      <Goalseekr className="projectsGoalSeekr" />
      <Sdc className="projectsSDC" />
      <NotNaked className="projectsNotNaked" />
      <div className="emptyDivAtBottom" ></div>
    </div>
  )
}

export default Projects;