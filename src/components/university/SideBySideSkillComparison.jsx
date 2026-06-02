import React from 'react'

function SkillRow({ skill, tone }) {
  const cls = tone === 'green' ? 'bg-emerald-50 text-emerald-800' : 'bg-blue-50 text-blue-800'
  return <div className={`rounded-xl px-4 py-3 text-sm font-semibold ${cls}`}>{skill}</div>
}

export default function SideBySideSkillComparison({ taught, demanded }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">3. Side-by-Side Comparison</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-emerald-50/40 p-4">
          <h3 className="mb-4 text-sm font-semibold text-slate-950">Skills Taught</h3>
          <div className="space-y-3">
            {taught.map((skill) => <SkillRow key={skill} skill={skill} tone="green" />)}
          </div>
        </div>
        <div className="rounded-2xl bg-blue-50/40 p-4">
          <h3 className="mb-4 text-sm font-semibold text-slate-950">Skills Demanded</h3>
          <div className="space-y-3">
            {demanded.map((skill) => <SkillRow key={skill} skill={skill} tone="blue" />)}
          </div>
        </div>
      </div>
    </section>
  )
}
