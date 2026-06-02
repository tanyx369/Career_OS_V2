import React from 'react'

export default function PillChip({ children, selected = true }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
        selected ? 'bg-indigo-50 text-indigo-700 ring-indigo-100' : 'bg-white text-slate-500 ring-slate-200'
      }`}
    >
      {children}
    </span>
  )
}
