import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../data/products'
import { motion } from 'framer-motion'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="muted">{product.short}</p>
        <div className="card-meta">
          <div className="price">{product.price}</div>
          <div className="rating">⭐ {product.rating}</div>
        </div>
      </div>
    </motion.article>
  )
}
