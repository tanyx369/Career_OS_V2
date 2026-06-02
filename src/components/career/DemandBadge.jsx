import React from 'react'

export default function DemandBadge({ demand }) {
  const isHigh = demand === 'High Demand'

  return (
    <span
      className={`rounded-lg px-3 py-1 text-xs font-semibold ${
        isHigh ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-100' : 'bg-amber-50 text-amber-600 ring-1 ring-amber-100'
      }`}
    >
      {demand}
    </span>
  )
}
