import React from 'react'

export function DemandBadge({ value }) {
  const isHigh = value === 'High'
  return (
    <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${isHigh ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
      {value}
    </span>
  )
}

export function ImpactBadge({ value }) {
  const isHigh = value === 'High Impact'
  return (
    <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${isHigh ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'}`}>
      {value}
    </span>
  )
}

export function StatusBadge({ value }) {
  const isRisk = value === 'At Risk'
  return (
    <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${isRisk ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
      {value}
    </span>
  )
}
