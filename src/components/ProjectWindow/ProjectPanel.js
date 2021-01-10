import React from 'react'
import ProjectTabs from './ProjectTabs';

function ProjectPanel() {
    const projects=["DM-AI","stayAnonymous","CTG","Bikelele", "Banking System","Hope-Interface","A Life of Interest","Nikhilesh"];
    const projectsList=projects.map((project)=>(<ProjectTabs name={project}/>))
    console.log(projectsList);
    return (
        <div>
            {

                projectsList
                
            }
            
            
        </div>
    )
}

export default ProjectPanel
