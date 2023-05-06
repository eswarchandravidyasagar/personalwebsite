
import "../Styles/Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wq5cz08', 'template_8md47lg', form.current, 'zlB26FFg6XmjtpfZr')

    //create a success message
    .then((result) => {
      //need a div to display the message successfully sent
      document.getElementById("success").innerHTML = "Message sent successfully";
    }
    //create an error message
    , (error) => {
        console.log(error.text);
        alert("An error occurred, Please try again", error.text);
    });
     
  };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <div id="success">d</div>
    </div>
  );
};


 export default Contact