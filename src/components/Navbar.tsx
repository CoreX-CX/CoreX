import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo">
          <span className="neon">COREX</span>
        </Link>
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="btn ghost">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </nav>
  )
}
