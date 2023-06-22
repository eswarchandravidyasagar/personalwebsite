import React, { useEffect, useState } from 'react';
import{Link, useLocation} from 'react-router-dom';
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

import  logo from "../Assets/logo.png"


function Navbar() {
  const [expandNavbar,setexpandNavbar]= useState(false);
  const location = useLocation();

useEffect(()=>{setexpandNavbar(false)},[location])


  return (
    <div   className='navbar '   id={expandNavbar ? "open" : "close"}>
    
    <div className='logo'>
        <img id='logo' src={logo} alt="logo" />
        </div>
  
    <div className='toggleButton'>
        <button onClick={
          ()=>{setexpandNavbar((prev)=> !prev);
          }}>
          <ReorderIcon /> </button>
    </div>
    

    <div   className='lnks'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>

       

    </div>

    
    
    </div>
  )
}

export default Navbar