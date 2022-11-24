import React from "react";
import './Projects.css';
import Sdc from './individualProjects/Sdc.jsx';
import Goalseekr from './individualProjects/Goalseekr.jsx';
import Mvp from './individualProjects/Mvp.jsx';

function Projects() {
  return (
    <div>
      <Goalseekr />
      <Mvp />
      {/* <Sdc /> */}
    </div>
  )
}

export default Projects;