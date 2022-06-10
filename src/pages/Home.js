import React from 'react';
import "../Styles/Home.css";
import LinkeinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"
function Home() {
  return (
    <div className='home'>
    <div className='about'>
      <h2>Hi,My name is Eswar</h2>
      <div className='prompt'>
        <p>I am a passionate programmer with problem solving skills</p>
        <LinkeinIcon />
        <GithubIcon />
        <EmailIcon />
      </div>
    </div>

    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front End </h2>
            <span>Html,CSS,Javascript,React,Bootstrap</span>
          
        </li>
        <li className='item'>
          <h2>Backend skills</h2>
          <span>Node.js, MongoDB ,Expressjs</span>
        </li>
        <li className='item'></li>
      </ol>


    </div>
    
    </div>
  )
}

export default Home