import React from 'react'
import ReadinessGauge from './ReadinessGauge'

export default function PathOverviewCard({ path }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Path Overview</h3>
      <div className="mt-4">
        <ReadinessGauge value={path.matchScore} label="Overall Path Fit" text="Excellent match!" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-lg font-semibold text-emerald-600">5</p>
          <p className="text-[11px] text-slate-500">Strong Skills</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-rose-500">4</p>
          <p className="text-[11px] text-slate-500">Skills to Build</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">8-12</p>
          <p className="text-[11px] text-slate-500">Weeks Ready</p>
        </div>
      </div>
    </section>
  )
}
