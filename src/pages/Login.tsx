import React from 'react'

export default function Login() {
  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo login — no backend implemented')
  }
  return (
    <section className="auth-panel glass">
      <h2>Login</h2>
      <form onSubmit={handle}>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <div className="form-actions">
          <button className="btn">Login</button>
        </div>
      </form>
    </section>
  )
}
