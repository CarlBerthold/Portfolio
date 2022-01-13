import React from "react";
import Weather from "../elements/Weather";
import Clock from "../elements/Clock";
 
function Projects() {
  return (
  
    <div>
      <h1>This are my Projects</h1>
      
      <div className="projects">

        <div className="weather">
          <Weather />
        </div>
        
        <div className="clock">
          <Clock />
        </div>
        
        {/* <div className="noName">
          <Weather />
        </div> */}
        
      </div>
    </div> 
    
  )
}
 
export default Projects;