import React from 'react'
import { products } from '../data/products'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) return <div className="container-panel">Product not found</div>

  return (
    <section className="product-details">
      <div className="media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="info">
        <h1>{product.title}</h1>
        <p className="muted">{product.category} • ⭐ {product.rating}</p>
        <p className="lead">{product.description}</p>

        <div className="buy">
          <div className="price big">{product.price}</div>
          <div className="actions">
            <button className="btn neon">Request Demo</button>
            <Link to="/contact" className="btn ghost">Ask a Question</Link>
          </div>
        </div>

        <div className="tags">{product.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </section>
  )
}
