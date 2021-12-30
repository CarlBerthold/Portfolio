import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="navigation">
        {/* this i maybe dont need here in my Navigation */}
        {/* <img src={""} className="logo-image" alt="Logo" /> */}
        <div className="navigation-sub">
        <Link to="/"><button className="navigation-button">Home</button></Link>
        <Link to="/aboutme"><button className="navigation-button">About Me</button></Link>
        <Link to="/projects"><button className="navigation-button">Projects</button></Link>
        <Link to="technologies"><button className="navigation-button">Technologies</button></Link>
        </div>
      </div>
    )
}

export default Navigation;