import React from 'react';
import '../../styles/App.css';

function Contact() {
  return (
    <section className="contact-page-container"> 
      <h2>Get In Touch</h2>
      <p>I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea style={{ fontFamily: 'Arial, sans-serif' }} placeholder="Your Message" rows="6" required></textarea>
        <button style={{ padding: '15px 20px' }} type="submit" className="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;