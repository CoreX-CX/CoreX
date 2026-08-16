import React from 'react'

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="search">
      <input
        placeholder="Search products, tags..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
