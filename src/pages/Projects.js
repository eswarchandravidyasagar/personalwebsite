import React from 'react';
import "../Styles/Projects.css";
import ProjectItem from '../Components/ProjectItem';
import {projectList} from "../helpers/ProjectList";


function Projects() {
  return (
    <div className='projects'>
      <h1>My personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project ,index)=>{
          return <ProjectItem  id={index} name={project.name} image={project.image} dmeo={project.Demo}/>
        })}
        
      </div>
      
    </div>
  )
}

export default Projects