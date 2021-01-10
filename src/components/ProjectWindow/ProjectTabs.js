import React from 'react'
import styles from './project.module.css'
function ProjectTabs(props) {
    return (
        <div>
            <div className={`animate__fadeInUp ${styles.projCont}`}>
                <div className="panel panel-default">
                    <div className="panel-heading"><strong>{props.name}</strong></div>
                    <div className="panel-body">
                        <img src={props.imgURL} style={{width:"400px", height:"auto"}}/>
                        <p>{props.desc}</p>
                    </div>
                    <div className="panel-footer">
                        <a href={props.link} className="btn btn-sm btn-success">Link Here</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ProjectTabs
