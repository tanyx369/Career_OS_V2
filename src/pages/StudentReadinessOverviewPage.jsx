import React, { useState } from 'react'

const kpis = [
  { label: 'Avg. Readiness Score', value: '74%', helper: '+6% vs last semester', tone: 'blue' },
  { label: 'Strong Skills', value: '3', helper: 'Skills', tone: 'emerald' },
  { label: 'Skills Needing Improvement', value: '4', helper: 'Skills', tone: 'violet' },
  { label: 'Students at Risk', value: '62', helper: 'Requiring attention', tone: 'rose' },
]

const heatmapRows = [
  { skill: 'Python', values: [92, 90, 88, 85], target: 85, roles: ['Software Engineer', 'Data Analyst'], actions: ['Maintain advanced project work'], missing: 12, demand: 'High' },
  { skill: 'Data Structures', values: [78, 82, 85, null], target: 80, roles: ['Software Engineer', 'Backend Engineer'], actions: ['Add more applied coding labs'], missing: 18, demand: 'High' },
  { skill: 'Algorithms', values: [65, 70, 72, null], target: 75, roles: ['Software Engineer', 'QA Engineer'], actions: ['Add interview-style practice'], missing: 28, demand: 'Medium' },
  { skill: 'Database (SQL)', values: [60, 72, 78, null], target: 75, roles: ['Data Analyst', 'Backend Engineer'], actions: ['Add advanced SQL project module'], missing: 22, demand: 'High' },
  { skill: 'Web Development', values: [68, 75, 70, null], target: 70, roles: ['Frontend Engineer', 'Software Engineer'], actions: ['Refresh practical frontend assignments'], missing: 30, demand: 'Medium' },
  { skill: 'Cloud', values: [25, 32, 38, null], target: 70, roles: ['DevOps Engineer', 'Data Engineer', 'ML Engineer'], actions: ['Add AWS Cloud Practitioner workshop', 'Partner with AWS Educate program', 'Organize cloud hackathon with industry'], missing: 62, demand: 'High' },
  { skill: 'MLOps', values: [18, 22, 26, null], target: 65, roles: ['ML Engineer', 'Data Engineer'], actions: ['Create MLOps short course', 'Add certification path'], missing: 58, demand: 'High' },
  { skill: 'Product Thinking', values: [30, 35, 40, null], target: 60, roles: ['Product Analyst', 'Business Analyst'], actions: ['Add case-based learning', 'Run product analytics projects'], missing: 40, demand: 'Medium' },
]

const gapActions = [
  ['Cloud', '62% students missing', 'High demand', 'High impact', 'Add workshop / Industry partner', 62],
  ['MLOps', '58% students missing', 'High demand', 'High impact', 'Short course / Certification path', 58],
  ['Power BI', '48% students missing', 'High demand', 'Medium impact', 'Elective module', 48],
  ['Product Thinking', '40% students missing', 'Medium demand', 'Medium impact', 'Case-based learning / Projects', 40],
]

const toneClasses = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
}

function FilterButton({ label, value }) {
  return (
    <button type="button" className="flex h-11 min-w-[210px] items-center justify-between rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm">
      <span><span className="mr-2 text-xs font-medium text-slate-400">{label}:</span>{value}</span>
      <span className="text-slate-400">v</span>
    </button>
  )
}

function KpiCard({ item }) {
  return (
    <article className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
      <p className={`mt-3 text-4xl font-semibold tracking-tight ${item.tone === 'rose' ? 'text-rose-600' : item.tone === 'emerald' ? 'text-emerald-600' : item.tone === 'violet' ? 'text-violet-600' : 'text-blue-700'}`}>
        {item.value}
      </p>
      <p className="mt-3 text-sm font-semibold text-slate-500">{item.helper}</p>
    </article>
  )
}

function readinessTone(value) {
  if (value === null || value === undefined) return 'bg-slate-50 text-slate-400 ring-slate-100'
  if (value >= 80) return 'bg-emerald-50 text-emerald-700 ring-emerald-100'
  if (value >= 50) return 'bg-amber-50 text-amber-700 ring-amber-100'
  return 'bg-rose-50 text-rose-700 ring-rose-100'
}

function readinessLabel(value) {
  if (value === null || value === undefined) return '-'
  return `${value}%`
}

function HeatmapCell({ row, value, year }) {
  return (
    <td className="border-b border-white p-1">
      <div
        className={`flex min-h-[52px] items-center justify-center rounded-[8px] text-sm font-semibold ring-1 ${readinessTone(value)}`}
        title={`${row.skill} / Year ${year}: ${value === null || value === undefined ? 'Not started' : `${value}% readiness`}`}
      >
        {readinessLabel(value)}
      </div>
    </td>
  )
}

function HeatmapTable({ selectedSkill, onSelectSkill }) {
  return (
    <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-lg font-medium text-slate-950">Skill Readiness Heatmap</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Heatmap shows average readiness level by skill and year.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />High 80-100%</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" />Medium 50-79%</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-500" />Low below 50%</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-slate-300" />Not started</span>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left">
          <thead>
            <tr className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
              <th className="rounded-l-[8px] bg-slate-50 px-3 py-3">Skill</th>
              <th className="bg-slate-50 px-2 py-3 text-center">Year 1</th>
              <th className="bg-slate-50 px-2 py-3 text-center">Year 2</th>
              <th className="bg-slate-50 px-2 py-3 text-center text-blue-700">Year 3</th>
              <th className="bg-slate-50 px-2 py-3 text-center">Year 4</th>
              <th className="rounded-r-[8px] bg-slate-50 px-3 py-3 text-center">Career Readiness Target</th>
            </tr>
          </thead>
          <tbody>
            {heatmapRows.map((row) => {
              const active = row.skill === selectedSkill.skill
              return (
                <tr key={row.skill} onClick={() => onSelectSkill(row)} className={`cursor-pointer transition ${active ? 'bg-blue-50/45' : 'hover:bg-slate-50/70'}`}>
                  <td className="border-b border-slate-100 px-3 py-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-xs font-semibold ring-1 ${active ? toneClasses.blue : 'bg-slate-50 text-slate-500 ring-slate-100'}`}>
                        {row.skill.slice(0, 1)}
                      </span>
                      <span className="text-sm font-semibold text-slate-950">{row.skill}</span>
                    </div>
                  </td>
                  {row.values.map((value, index) => <HeatmapCell key={`${row.skill}-${index}`} row={row} value={value} year={index + 1} />)}
                  <td className="border-b border-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700">{row.target}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function KeyInsightsPanel() {
  return (
    <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-medium text-slate-950">Key Insights</h2>
      <div className="mt-4 divide-y divide-slate-100">
        {[
          ['Core technical skills are strong.', 'Python, SQL, and Data Structures are above target.', 'emerald'],
          ['Cloud and MLOps are the biggest gaps compared to target.', 'High market demand in 70%+ job postings.', 'amber'],
          ['62 students need attention.', 'Personalized interventions recommended.', 'violet'],
        ].map(([title, detail, tone]) => (
          <div key={title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-xs font-semibold ring-1 ${toneClasses[tone]}`}>{title.slice(0, 1)}</span>
            <div>
              <p className="text-sm font-semibold text-slate-950">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DeepDivePanel({ skill }) {
  const yearThree = skill.values[2]
  const studentsMissing = skill.missing

  return (
    <section className="rounded-[8px] border border-violet-100 bg-white p-5 shadow-[0_16px_42px_rgba(79,70,229,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-medium text-slate-950">Skill Deep Dive</h2>
        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">Live</span>
      </div>
      <div className="mt-5 flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-blue-50 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">{skill.skill.slice(0, 1)}</span>
        <div>
          <h3 className="text-base font-semibold text-slate-950">{skill.skill}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">Year 3 Readiness: <span className={yearThree < 50 ? 'text-rose-600' : 'text-blue-700'}>{yearThree}%</span></p>
        </div>
      </div>
      <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between text-sm"><span className="font-medium text-slate-600">Students Missing</span><span className="text-xl font-semibold text-rose-600">{studentsMissing}%</span></div>
        <div className="flex items-center justify-between text-sm"><span className="font-medium text-slate-600">Market Demand</span><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${skill.demand === 'High' ? toneClasses.emerald : toneClasses.amber}`}>{skill.demand}</span></div>
      </div>
      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-950">Top Related Roles</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {skill.roles.map((role) => <span key={role} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">{role}</span>)}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-950">Recommended Actions</p>
        <div className="mt-3 space-y-2">
          {skill.actions.map((action) => (
            <div key={action} className="flex gap-2 text-sm leading-6 text-slate-600">
              <span className="font-semibold text-emerald-600">âœ“</span>
              <span>{action}</span>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="mt-6 w-full rounded-[8px] border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm">
        View Students Affected (124)
      </button>
    </section>
  )
}

function GapActionsTable() {
  return (
    <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-medium text-slate-950">Top Skill Gaps & Recommended Actions</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
              <th className="rounded-l-[8px] bg-slate-50 px-3 py-3">Skill</th>
              <th className="bg-slate-50 px-3 py-3">% of Students Missing</th>
              <th className="bg-slate-50 px-3 py-3">Market Demand</th>
              <th className="bg-slate-50 px-3 py-3">Impact on Career Outcomes</th>
              <th className="rounded-r-[8px] bg-slate-50 px-3 py-3">Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {gapActions.map(([skill, missing, demand, impact, action, value]) => (
              <tr key={skill}>
                <td className="border-b border-slate-100 px-3 py-4 text-sm font-semibold text-slate-950">{skill}</td>
                <td className="border-b border-slate-100 px-3 py-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-24 text-sm font-semibold ${value >= 50 ? 'text-rose-600' : 'text-amber-600'}`}>{missing}</span>
                    <div className="h-2 w-32 rounded-full bg-slate-100">
                      <div className={`h-2 rounded-full ${value >= 50 ? 'bg-rose-500' : 'bg-amber-400'}`} style={{ width: `${value}%` }} />
                    </div>
                  </div>
                </td>
                <td className="border-b border-slate-100 px-3 py-4"><span className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${demand.startsWith('High') ? toneClasses.emerald : toneClasses.amber}`}>{demand}</span></td>
                <td className="border-b border-slate-100 px-3 py-4"><span className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${impact.startsWith('High') ? toneClasses.rose : toneClasses.amber}`}>{impact}</span></td>
                <td className="border-b border-slate-100 px-3 py-4 text-sm font-semibold text-slate-600">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function StudentReadinessOverviewPage() {
  const defaultSkill = heatmapRows.find((row) => row.skill === 'Cloud') || heatmapRows[0]
  const [selectedSkill, setSelectedSkill] = useState(defaultSkill)

  return (
    <div className="mx-auto max-w-[1560px] space-y-6">
      <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">University Intelligence</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Student Readiness</h1>
          <p className="mt-2 text-base leading-7 text-slate-500">Understand how your students are progressing across key career skills.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <FilterButton label="Program" value="BSc Computer Science" />
          <FilterButton label="Cohort" value="Year 3" />
          <button type="button" className="h-11 rounded-[8px] bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => <KpiCard key={item.label} item={item} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
        <div className="min-w-0 space-y-5">
          <HeatmapTable selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
          <GapActionsTable />
        </div>
        <aside className="space-y-5">
          <KeyInsightsPanel />
          <DeepDivePanel skill={selectedSkill} />
        </aside>
      </section>
    </div>
  )
}

