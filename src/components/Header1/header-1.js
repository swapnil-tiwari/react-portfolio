import React from 'react'
import NotificationBar from '../NotificationPanel/notificationpanel';

function Header1(props)
{
   console.log(props)
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-lgpush-3 col-md-push-3">
                     <div className="text-center">
                        <h1><strong>Swapnil Tiwari</strong></h1>
                        <p>Full Stack Web Developer </p>
                    </div>
                </div>
            </div>
            <div className="centered-div">
                <button  className="btn btn-success" type="button" onClick={props.initiateButton}>Initiate Projects</button>
            </div>
        </div>

        
        
    )
}

export default Header1;