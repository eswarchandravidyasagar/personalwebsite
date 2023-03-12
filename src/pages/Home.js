import React from 'react';
import "../Styles/Home.css";
import LinkeinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"




function Home() {
  return (

    <div className='home'>
    <div className='about'>
      <h2 className='name'>Hi,My name is Eswar.</h2>
      <div className='prompt'>
        <p>I love Building for web</p>
        <a href='https://www.linkedin.com/in/eswarattuluri/' ><LinkeinIcon /></a>
        <a href='https://github.com/eswarchandravidyasagar'><GithubIcon /></a>
        <a href={"/contact"} ><EmailIcon /></a>
      </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <h2>Front end skills</h2>
      <p>HTML,CSS,Javascript,React,bootstrap,MaterialUI</p>
      <h2>Front end skills</h2>
      <p>Node.js,MongoDB,Express.js</p>
    </div>
    </div>
  )
}

export default Home