import React from 'react'
import { Category } from '../data/products'

export default function CategoryFilter({
  categories,
  selected,
  onSelect
}: {
  categories: Category[]
  selected: string | null
  onSelect: (c: string | null) => void
}) {
  return (
    <div className="categories">
      <button
        className={`chip ${selected === null ? 'active' : ''}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          className={`chip ${selected === c ? 'active' : ''}`}
          onClick={() => onSelect(selected === c ? null : c)}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
