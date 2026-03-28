import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Replace these with your actual EmailJS values
    const SERVICE_ID = 'service_m1o6lka';
    const TEMPLATE_ID = 'template_nbjxuza';
    const PUBLIC_KEY = 'l0PjT4LiDFn7Z3Iq_';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <p className="section-label">Say Hello</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Pune, India</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>maithily.sugre.2@gmail.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <span>🎉</span>
                <p>Thanks! I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message ✦
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
