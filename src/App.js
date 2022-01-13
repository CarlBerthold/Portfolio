//import react from 'react';
import {Routes, Route, } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import TechnologiePage from './pages/TechnologiePage';
import Navigation from './elements/Navigation';
import LandingPage from './pages/Landingpage';


function App() {
  

  return (
    <div className="App">
    <Navigation />
    <Routes>
      <Route exact path="/projects" element={<ProjectPage/>}></Route>
      <Route exact path="/technologies" element={<TechnologiePage/>}></Route>
      <Route exact path="/aboutme" element={<AboutPage/>}></Route>
      <Route exact path="/" element={<LandingPage/> }></Route>
    </Routes>  
    </div>
    
  
  );
}

export default App;