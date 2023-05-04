import React from 'react';
import "../Styles/Home.css";
import LinkeinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"




function Home() {
  return (

    <div  class="md:container md:mx-auto">
  <div className='about'>
    <h2 className='name'>Hello, I'm Eswar Attuluri.</h2>
    
    <div className='prompt'>
      <p>I'm a web developer with a passion for creating beautiful and functional websites. I specialize in front-end development using HTML, CSS, and JavaScript, and have experience working with frameworks like React, Bootstrap, and MaterialUI. </p>
      <p>When I'm not coding, you can find me exploring new technologies and staying up-to-date with the latest industry trends. Connect with me on LinkedIn, check out my Github profile, or drop me an email if you're interested in working together.</p>
      <div className='social-icons'>
        <a href='https://www.linkedin.com/in/eswarattuluri/' ><LinkeinIcon /></a>
        <a href='https://github.com/eswarchandravidyasagar'><GithubIcon /></a>
        <a href={"/contact"} ><EmailIcon /></a>
      </div>
    </div>
  </div>
  <div className='skills'>


    <h2>Skills</h2>
    <p>I have a strong foundation in front-end web development and am proficient in HTML, CSS, and JavaScript. I also have experience working with popular front-end frameworks like React, Bootstrap, and MaterialUI. </p>
    <p>On the back-end, I'm well-versed in Node.js, Express, and MongoDB, allowing me to build full-stack web applications that are both scalable and robust.</p>
    <p>Aside from my technical skills, I'm a proactive communicator and a collaborative team player. I enjoy working closely with clients and stakeholders to ensure that their needs are met and their expectations are exceeded.</p>
  </div>
</div>






  )
}

export default Home