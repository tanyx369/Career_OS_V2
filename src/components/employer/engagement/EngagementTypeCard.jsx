import React from 'react'

export default function EngagementTypeCard({ type, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-w-44 items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 ${
        selected ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200'
      }`}
    >
      <span className="text-sm font-semibold">{type}</span>
      {selected && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">✓</span>}
    </button>
  )
}
