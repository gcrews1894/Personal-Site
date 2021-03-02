import React from 'react';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'engineering_contact', e.target, 'user_MzoSfCEP78yv4olIqSq9Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="contact-form">
        <form onSubmit={sendEmail}>
            <div>
                <input className="form-control" type="text" placeholder="Name" name="name" /><br></br>
            </div>
            <div>
                <input className="form-control" type="email" placeholder="Email Address" name="email" /><br></br>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Subject" name="subject" /><br></br>
            </div>
            <div>
                <textarea className="form-control messageArea" placeholder="Your Message" name="message" /><br></br>
            </div>
            <Button type="submit" className="primaryButton" variant="contained" color="primary">Send Message</Button>
        </form>
    </div>
  );
}