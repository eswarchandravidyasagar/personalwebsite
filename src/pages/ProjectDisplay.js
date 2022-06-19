import React from 'react'
import {useParams} from "react-router-dom";
import "../Styles/ProjectDisplay.css"
import { projectList } from '../helpers/ProjectList';
function ProjectDisplay() {
     const {id} = useParams()
     const project= projectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.Demo}>Demo</a>
    </div>
  )
}

export default ProjectDisplay