import React from 'react'
import "../styles/Contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <section id="contact-info">
        <h2><span className="beautify">Contact Information</span></h2>
        <p>Have a question, comment, or suggestion? We'd love to hear from you!</p>
        <p>You can reach us through the following channels:</p>
        <ul>
          <li>Email: <a href="mailto:info@flixio.com">info@flixio.com</a></li>
          <li>Phone: 9965445699</li>
          <li>Address: 1234 Razor's Apartment, India</li>
        </ul>
      </section>

      <section id="contact-form">
        <h2><span className="beautify">Contact Form</span></h2>
        <p>Send us a message using the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

        <p>Thank you for reaching out to us. We'll get back to you as soon as possible!</p>
    </div>
  )
}
