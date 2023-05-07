import React from 'react';
import "../Styles/Home.css";
import LinkeinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"




function Home() {
  return (

    <div   id='contact'>
  <div className='about'>
 

<div id='herodata'>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://media.licdn.com/dms/image/C4E03AQHGL-SL3YEVVg/profile-displayphoto-shrink_400_400/0/1595353191935?e=1688601600&v=beta&t=T7uvCfVn2Kx_Zq1-HtlqWFjP5sjX7_710GQnGPZVvcI" />
  </div>
</div>
    <h1 className='name'>Hello 👋, I'm Eswar Attuluri.</h1>
    <h3 className='title'> Software Developer </h3>
    <p className='description'>I am a software developer with a passion for building things. I am currently pursuing my Masters in Computer Science at the University of Southern California. I am interested in building scalable and reliable software systems. I am currently looking for full-time opportunities starting May 2022.</p>




    </div>
    <div class="bg-base-200" className='prompt'>
        <div className='social-icons'>
        <a  class='xl' href='https://www.linkedin.com/in/eswarattuluri/' ><LinkeinIcon /></a>
        <a  href='https://github.com/eswarchandravidyasagar'><GithubIcon /></a>
        <a href={"/contact"} ><EmailIcon /></a>
      </div>
      
    </div>
  </div>
  
  
  <div class="container mx-auto base-200 " >


    </div>
    
    

</div>






  )
}

export default Home