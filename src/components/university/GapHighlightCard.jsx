import React from 'react'

export default function GapHighlightCard({ gap }) {
  return (
    <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3">
      <p className="text-sm leading-6 text-slate-800">
        <span className="font-semibold text-rose-600">{gap.evidence}</span> - {gap.status}
      </p>
    </div>
  )
}
