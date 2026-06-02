import React from 'react'

export default function AISuggestionCard({ suggestion }) {
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-4 py-3">
      <h3 className="text-sm font-semibold text-indigo-700">{suggestion.title}</h3>
      <p className="mt-1 text-sm text-indigo-600">{suggestion.description}</p>
    </div>
  )
}
