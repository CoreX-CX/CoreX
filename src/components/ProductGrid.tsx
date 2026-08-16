import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../data/products'
import { motion } from 'framer-motion'

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <motion.section
      className="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </motion.section>
  )
}
