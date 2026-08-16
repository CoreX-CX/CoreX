import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-grid">
        <div className="home-left glass">
          <h1>COREX</h1>
          <p className="muted">Marketplace for developer tools, hosting, and domains.</p>
          <div className="home-actions">
            <Link to="/store" className="btn">Browse Store</Link>
            <Link to="/contact" className="btn ghost">Contact</Link>
          </div>
        </div>
        <div className="home-right">
          <div className="showcase glass neon-border">
            <h3>Featured</h3>
            <p>Studio Web Dev Pack — templates & components</p>
          </div>
        </div>
      </div>

      <section className="home-products">
        <h2>Popular</h2>
        <p className="muted">Hand-picked products to get you started.</p>
        <div className="mini-grid">
          {/* import products lazily to avoid circular dependencies in this demo */}
        </div>
      </section>
    </section>
  )
}
