import React from 'react'

export default function MatchBadge({ score }) {
  return (
    <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
      {score}% Match
    </span>
  )
}
