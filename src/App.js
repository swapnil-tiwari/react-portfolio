// import logo from './logo.svg';
import  React, {Component} from 'react';
import './App.css';
import Upperbar from './components/UpperBar/UpperBar';
import Header1 from './components/Header1/header-1';
import ProjectPanel from './components/ProjectWindow/ProjectPanel';
// import Clock from './components/ClockPanel/Clock'

function sessionSetter()
{
  if (sessionStorage.hits)
  {
    sessionStorage.hits=Number(sessionStorage.hits)+1;
  }
  else{
    sessionStorage.hits=1;
  }
}

sessionSetter();

class App extends Component
{
  constructor(props)
  {
    super(props)
    
      this.state=
      {
        viewProj:false,
        notificationActive:false
      }
    
    this.viewProjPanel=this.viewProjPanel.bind(this)
    
    
  }
  viewProjPanel()
  {
    this.setState({
      viewProj:true,
      notificationActive:true
    })    
    
  }
  
  render() {
    let ProjectWindow;
    if(this.state.viewProj)
    {
      ProjectWindow=<ProjectPanel/>
      console.log("Projects Initiated")
    }
    return (
      <div className="App">
        <div className="container">
        <Upperbar notificationState={this.state.notificationActive} key={this.state.notificationActive}/>
        <Header1 initiateButton={this.viewProjPanel}/>

        <br/>
        <br/>
        
        {
          ProjectWindow
        }
        
        </div>
        
      </div>
    );
  }
}
 

export default App;
