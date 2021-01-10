import React from 'react'
import ProjectTabs from './ProjectTabs';
import {projectList} from '../../assets/projects.js'

function ProjectPanel() {
    const projects=["DM-AI","stayAnonymous","CTG","Bikelele", "Banking System","Hope-Interface","A Life of Interest","Nikhilesh"];
    const projectView=projectList.map((project)=>(<ProjectTabs key={project.id} name={project.name} imgURL={project.imgURL} link={project.link} desc={project.desc}/>))
    // console.log(projectsList);
    return (
        <div>
            {

                projectView
                
            }
            
            
        </div>
    )
}

export default ProjectPanel
