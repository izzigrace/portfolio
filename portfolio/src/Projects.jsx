import React from "react";
import './Projects.css';
import Sdc from './individualProjects/Sdc.jsx';
import Goalseekr from './individualProjects/Goalseekr.jsx';
import Mvp from './individualProjects/Mvp.jsx';
import NotNaked from './individualProjects/NotNaked.jsx';

function Projects() {
  return (
    <div>
      <Mvp />
      <Goalseekr />
      <Sdc />
      <NotNaked />
    </div>
  )
}

export default Projects;