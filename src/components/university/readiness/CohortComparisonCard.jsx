import React from 'react'

export default function CohortComparisonCard({ cohorts, insight }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-950">
          <span className="text-blue-600">CO</span>
          Cohort Comparison
        </h2>
        <span className="text-blue-600">BAR</span>
      </div>

      <div className="mt-6 space-y-5">
        {cohorts.map((cohort) => (
          <div key={cohort.cohort} className="grid gap-4 border-b border-slate-100 pb-5 last:border-b-0 sm:grid-cols-[0.8fr_1.7fr_0.8fr_0.8fr] sm:items-center">
            <div>
              <p className="font-semibold text-slate-950">{cohort.cohort}</p>
              <p className="mt-1 text-xs text-slate-500">Average Readiness</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-3 flex-1 rounded-full bg-indigo-50">
                <div className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${cohort.averageReadiness}%` }} />
              </div>
              <span className="min-w-16 font-semibold text-indigo-600">{cohort.averageReadiness} <span className="text-slate-500">/100</span></span>
            </div>
            <div>
              <p className="text-xs text-slate-500">Above 80%</p>
              <p className="mt-1 font-semibold text-emerald-600">{cohort.above80}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Below 50%</p>
              <p className="mt-1 font-semibold text-rose-500">{cohort.below50}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-500">
        <span className="mr-2 font-semibold text-blue-600">i</span>
        {insight}
      </div>
    </section>
  )
}
