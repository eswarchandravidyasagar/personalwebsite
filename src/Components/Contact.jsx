
import "../Styles/Contact.css";

function Contact() {
  return (
        <div className='form'>
          <form className="wrapper">
            <h1 className="me">Contact me</h1>
            <input   placeholder="Your name" className="item" type="text" /><br /><br />

            <input placeholder="Email..." className="item" type="email" /><br /><br />
            <textarea className="item" name="" id="" cols="30" rows="10" placeholder="Type your message here">Type Your message here</textarea><br /><br />
            <button  className="button" >Submit</button>


          </form>

        </div>
    
  )
}

export default Contact