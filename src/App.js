//import react from 'react';
import {Routes, Route, } from 'react-router-dom';
import './App.css';
import About from './About';
import Projects from './projects';
import Technologies from './Technologies';
import Navigation from './elements/Navigation';
import Landingpage from './pages/Landingpage';


function App() {
  return (
  
    <div className="App">
    <Navigation />
    <Routes>
      <Route exact path="/projects" element={<Projects/>}></Route>
      <Route exact path="/technologies" element={<Technologies/>}></Route>
      <Route exact path="/aboutme" element={<About/>}></Route>
      <Route exact path="/" element={<Landingpage/> }></Route>
    </Routes>  
    </div>
    
  
  );
}

export default App;