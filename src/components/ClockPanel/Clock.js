import React from 'react'
import  styles from './clock.module.css'
function getDate()
{
  let dateobj=new Date();
  let date={dd:0,mm:0,yy:0};


    date.dd=  dateobj.getDate()
    date.mm=  dateobj.getMonth()
    date.yy= dateobj.getFullYear()

   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
 
  return `${date.dd}th ${months[date.mm]} ${date.yy}`
}

function Clock()
{
  
    let date=  getDate();    
        return (
            <div className={styles.clockPanel}>
                <div>
                <strong> Date : {date} </strong>
                </div>
                
                
            </div>

        )
    
}
export default Clock
