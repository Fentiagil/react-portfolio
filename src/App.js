import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutMe from './components/About';
import Projects from './components/Project';
import Certificate from './components/Certificate';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
            <Route path="/" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/certificate" element={<Certificate/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
