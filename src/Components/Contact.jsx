
import "../Styles/Contact.css";
import React,{useState} from 'react';

function Contact() {

  


  return (
    <div class="form">
    <form  class="wrapper">
      <h1 class="me">Contact Me</h1>
      <div class="input-container">
        <input class="item"  type="text" placeholder="Your Name" />
      </div>
      <div class="input-container">
        <input class="item" type="email"  placeholder="Your Email" />
      </div>
      <div class="input-container">
        <textarea class="item"  placeholder="Type Your Message Here"></textarea>
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
  </div>
  
  )
}

export default Contact