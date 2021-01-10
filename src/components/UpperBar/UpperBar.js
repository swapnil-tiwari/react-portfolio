import React from 'react'
import { render } from 'react-dom'
import  styles from './upperBar.module.css'
import Clock from '../ClockPanel/Clock'
import NotificationBar from '../NotificationPanel/notificationpanel';

function upperbar(props)
{
    const notificationBarElem=React.createRef();
    function activateNotification() {
    
        notificationBarElem.current.setStatus();
    }
    
    return (
     
        <div className={styles.upperBar}>
            <Clock/>
            {/* <code>Hits: {hitscounter}</code> */}
            <NotificationBar notificationState={props.notificationState}/>
        </div>

    );
}


export default upperbar;