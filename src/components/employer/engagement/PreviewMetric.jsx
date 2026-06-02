import React from 'react'

export default function PreviewMetric({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-xl font-semibold text-indigo-700">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  )
}
