import React from 'react'

export default function GapBadge({ children }) {
  return (
    <span className="inline-flex rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
      {children}
    </span>
  )
}
