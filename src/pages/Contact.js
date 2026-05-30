import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className="page">
        <div className="success-msg">
          <h2>✅ Message Sent!</h2>
          <p>Thanks, {formData.name}. We'll get back to you at {formData.email} shortly.</p>
          <button onClick={() => setSubmitted(false)} className="submit-btn">
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Fill out the form below and our team will reach out within 24 hours.</p>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><span className="label">Email:</span> info@nazu.com</p>
          <p><span className="label">Phone:</span> +961 1 234 567</p>
          <p><span className="label">Location:</span> Beirut, Lebanon</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Service</label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              <option value="network">Network Security</option>
              <option value="threat">Threat Detection</option>
              <option value="monitoring">System Monitoring</option>
              <option value="assessment">Vulnerability Assessment</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
