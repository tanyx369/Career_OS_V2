import React from 'react'

export default function SearchInput({ value, onChange }) {
  return (
    <label className="relative block w-full sm:w-80">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">Search</span>
      <input
        className="h-11 w-full rounded-full border border-slate-200 bg-white pl-20 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
        placeholder="opportunities..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
