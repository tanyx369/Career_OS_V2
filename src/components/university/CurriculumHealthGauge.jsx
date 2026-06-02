import React from 'react'
import CircularGauge from './CircularGauge'
import StatusPill from './StatusPill'

export default function CurriculumHealthGauge({ score, status, summary }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h2 className="text-left text-base font-semibold text-slate-950">2. Curriculum Health Score</h2>
      <div className="mt-5">
        <CircularGauge value={score} />
        <StatusPill tone="amber">{status}</StatusPill>
        <p className="mx-auto mt-4 max-w-64 text-sm leading-6 text-slate-600">{summary}</p>
        <button type="button" className="mt-4 text-sm font-semibold text-blue-600">View score breakdown -&gt;</button>
      </div>
    </section>
  )
}
