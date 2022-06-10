import React from 'react';
import "../Styles/Footer.css";
import GithubIcon from "@mui/icons-material/GitHub"
import LinkedinIcon from "@mui/icons-material/LinkedIn"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"


function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
      <GithubIcon />
      <FacebookIcon/>
      <LinkedinIcon />
      <TwitterIcon />
    </div>
    <p>&copy; 2022 eswarattuluri.com</p>
    </div>
  )
}

export default Footer