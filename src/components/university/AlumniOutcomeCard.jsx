import React from 'react'
import SkillPill from './SkillPill'

export default function AlumniOutcomeCard({ outcomes }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">6. Alumni Outcome Overlay</h2>
      <p className="mt-4 text-sm text-slate-500">Where our alumni work</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {outcomes.companies.map((company) => (
          <div key={company} className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-lg font-semibold text-slate-800">
            {company}
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-rose-50/60 p-4">
        <p className="text-sm font-semibold text-slate-700">Top skill gaps reported by alumni:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {outcomes.reportedSkillGaps.map((gap) => <SkillPill key={gap} tone="red">{gap}</SkillPill>)}
        </div>
      </div>
    </section>
  )
}
