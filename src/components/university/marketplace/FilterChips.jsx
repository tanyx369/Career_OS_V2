import React from 'react'

export default function FilterChips({ filters, activeFilter, onChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            activeFilter === filter
              ? 'border-blue-600 bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)]'
              : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
