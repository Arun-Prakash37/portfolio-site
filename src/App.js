import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
