import React from 'react';
import "../Styles/Home.css";
import LinkeinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"


import { ReactComponent as Skills } from '../Assets/skills.svg';




function Home() {
  return (

    <div   id='contact'>
  <div className='about'>
 

<div id='herodata'>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img  id='img' className='rounded-full ' src="https://media.licdn.com/dms/image/C4E03AQHGL-SL3YEVVg/profile-displayphoto-shrink_400_400/0/1595353191935?e=1688601600&v=beta&t=T7uvCfVn2Kx_Zq1-HtlqWFjP5sjX7_710GQnGPZVvcI" />
  </div>
</div>
    <h1 className='name'>Hello 👋, I'm Eswar Attuluri.</h1>
    <h3 className='title'> Full stack  Developer </h3>
    <p className='description'>I am a software developer with a passion for building things.  I am interested in building scalable and reliable software systems. I am currently looking for full-time opportunities .</p>

    </div>
    <h1 id='sk' >Skills</h1> 
    <div className='skills '>
      < Skills className=' pb-0 mb-0' />

    </div>
    
    <div class=" py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div class="p-6 bg-white border-b border-gray-200">
        <div class="flex justify-center">
          <div class="social-icons text-5xl space-x-4">
            <a href="https://www.linkedin.com/in/eswarattuluri/" class="text-gray-500 text-xl hover:text-gray-900"><LinkeinIcon />Linkedin</a>
            <a href="https://github.com/eswarchandravidyasagar" class="text-gray-500 hover:text-gray-900"><GithubIcon />Github</a>
            <a href="/contact" class="text-gray-500 hover:text-gray-900"><EmailIcon />Email</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  
  
  <div class="container mx-auto base-200 " >


    </div>
    
    

</div>






  )
}

export default Home