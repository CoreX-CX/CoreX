import React from 'react'

export default function Contact() {
  const [sent, setSent] = React.useState(false)
  return (
    <section className="contact-panel glass">
      <h2>Contact Us</h2>
      <p className="muted">Send a message and our team will respond (demo only).</p>
      {!sent ? (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <label>Name</label>
          <input required />
          <label>Email</label>
          <input type="email" required />
          <label>Message</label>
          <textarea rows={6} required />
          <div className="form-actions">
            <button className="btn">Send Message</button>
          </div>
        </form>
      ) : (
        <div className="notice">Thanks — your message is queued (demo).</div>
      )}
    </section>
  )
}
