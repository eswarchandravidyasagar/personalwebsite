
import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import "./App.css"
import Contact from "./Components/Contact";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />  
      </Router>

      
    </div>
  );
}

export default App;
