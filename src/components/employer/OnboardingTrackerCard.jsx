import React from 'react'
import ProgressBar from '../ui/ProgressBar'

export default function OnboardingTrackerCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 text-xs font-semibold text-indigo-700">
            {item.candidate.slice(-2)}
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-950">Candidate {item.candidate}</p>
            <p className="mt-1 text-[11px] text-slate-500">{item.status}</p>
          </div>
        </div>
        <span className="text-lg font-semibold text-indigo-600">{item.progress}%</span>
      </div>
      <div className="mt-3">
        <ProgressBar value={item.progress} />
      </div>
      <p className="mt-3 text-xs text-slate-500">{item.note}</p>
    </article>
  )
}
