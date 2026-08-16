import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { Category } from '../data/products'

export default function Store() {
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState<string | null>(null)

  const cats: Category[] = ['Software', 'Hosting', 'Domains', 'Bots', 'Web Development']

  const filtered = products.filter((p) => {
    const matchesQuery = [p.title, p.short, p.tags.join(' ')].join(' ').toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category ? p.category === category : true
    return matchesQuery && matchesCategory
  })

  return (
    <section>
      <header className="hero">
        <div>
          <h1>Explore the Store</h1>
          <p className="muted">Quality digital products for developers and teams.</p>
        </div>
        <div className="hero-actions">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter categories={cats} selected={category} onSelect={setCategory} />
        </div>
      </header>

      <div className="results-count">{filtered.length} products</div>
      <ProductGrid items={filtered} />

      <div className="store-cta">
        <p>Want a custom integration? <Link to="/contact" className="link">Contact us</Link></p>
      </div>
    </section>
  )
}
