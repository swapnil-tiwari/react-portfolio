import React, {Component} from 'react'
import styles from './notificationbar.module.css'
class NotificationBar extends Component
{
    constructor()
    {
        super()
        
            this.state =
            {
                message: 'Projects Not Initiated',
                status:'down'
            }
        
        this.setStatus=this.setStatus.bind(this);
    }
    componentDidMount(props)
    {
        if(this.props.notificationState)
        {
            this.setStatus()
        }
        
    }
     setStatus()
    {
        this.setState({
            status:'up',
            message:'Projects Initiated'
        });
    }
    
    render()
    {
       
        let view='alert-danger';
        console.log(this.state.status)
        if(this.state.status==='up')
        {
            view='alert-success';
        }
        
        return (
            <div className={`alert ${view} text-center ${styles.notificationBar}`} >
                
                <div className={styles.notificationContainer}>
                <span>
                <strong>Message:</strong> {this.state.message} 
                </span>
                <span>
                <strong>Session Hits:</strong> {sessionStorage.hits}
                </span>
                    
                    
                
                </div>
                
            </div>
        )

    }
}
export default NotificationBar