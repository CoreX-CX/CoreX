import React from 'react'

export default function Register() {
  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo register — no backend implemented')
  }
  return (
    <section className="auth-panel glass">
      <h2>Create account</h2>
      <form onSubmit={handle}>
        <label>Name</label>
        <input required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <div className="form-actions">
          <button className="btn">Register</button>
        </div>
      </form>
    </section>
  )
}
