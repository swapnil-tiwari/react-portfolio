import React from 'react'

function ProjectTabs(props) {
    return (
        <div>
            <div className="col-lg-3 col-md-3 animate__fadeInUp">
                <div className="panel panel-default">
                    <div className="panel-heading">{props.name}</div>
                    <div className="panel-body">
                        <p>{props.name}</p>
                    </div>
                    <div className="panel-footer">
                        <a href="http://" className="btn btn-sm btn-success">Link Here</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ProjectTabs
