import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const overviewMetrics = [
  {
    label: 'Market Alignment Score',
    value: '76%',
    status: 'Good',
    change: '+8%',
    tone: 'blue',
    helper: 'Core program skills remain aligned with employer demand.',
  },
  {
    label: 'Graduate Readiness Score',
    value: '74%',
    status: 'Good',
    change: '+6%',
    tone: 'violet',
    helper: 'Readiness improved after analytics and Python reinforcement.',
  },
  {
    label: 'Students at Risk',
    value: '62',
    status: '18% of cohort',
    change: '+5',
    tone: 'rose',
    helper: 'Mostly concentrated around cloud deployment readiness.',
  },
  {
    label: 'Top Emerging Gap',
    value: 'Cloud & MLOps',
    status: 'High demand',
    change: 'Low coverage',
    tone: 'amber',
    helper: 'Priority gap for software, data, and AI roles.',
  },
  {
    label: 'Data Confidence',
    value: 'High',
    status: '68% coverage',
    change: 'Student data',
    tone: 'emerald',
    helper: 'Based on 68% student profile and course coverage signals.',
  },
]

const marketSkills = [
  { rank: 1, skill: 'Python', demand: 92, coverage: 88, gap: -4, priority: 'Low' },
  { rank: 2, skill: 'SQL', demand: 88, coverage: 82, gap: -6, priority: 'Low' },
  { rank: 3, skill: 'Data Analysis', demand: 85, coverage: 80, gap: -5, priority: 'Low' },
  { rank: 4, skill: 'AI / ML Basics', demand: 70, coverage: 75, gap: 5, priority: 'Low' },
  { rank: 5, skill: 'Cloud Deployment', demand: 76, coverage: 38, gap: -38, priority: 'High' },
  { rank: 6, skill: 'MLOps', demand: 74, coverage: 26, gap: -48, priority: 'High' },
  { rank: 7, skill: 'Product Analytics', demand: 58, coverage: 30, gap: -28, priority: 'Medium' },
  { rank: 8, skill: 'Power BI', demand: 42, coverage: 42, gap: 0, priority: 'Medium' },
]

const advisorFocus = [
  { title: 'Cloud competencies', impact: 'High Impact', students: '62 students', tone: 'blue' },
  { title: 'MLOps fundamentals', impact: 'Medium Impact', students: '48 students', tone: 'violet' },
  { title: 'Product thinking', impact: 'Medium Impact', students: '40 students', tone: 'amber' },
]

const strengths = ['Python', 'SQL', 'Data Analysis']
const weaknesses = ['Cloud', 'MLOps', 'Product Thinking']

const interventions = [
  { title: 'Cloud Workshop Series', impact: 'High Impact', duration: '8-12 weeks', tone: 'blue' },
  { title: 'AWS Educate Partnership', impact: 'High Impact', duration: 'Ongoing', tone: 'violet' },
  { title: 'AI Society Hackathon', impact: 'Medium Impact', duration: '1-2 weeks', tone: 'amber' },
  { title: 'MLOps Short Course', impact: 'Medium Impact', duration: '4 weeks', tone: 'emerald' },
]

const filterOptions = ['Program: BSc Computer Science', 'Cohort: Year 3', 'Semester: This Semester']

const metricToneClasses = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
}

const priorityClasses = {
  Low: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Medium: 'bg-amber-50 text-amber-700 ring-amber-100',
  High: 'bg-rose-50 text-rose-700 ring-rose-100',
}

function FilterButton({ label }) {
  return (
    <button
      type="button"
      className="flex h-11 items-center justify-between gap-3 rounded-[8px] border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
    >
      <span className="whitespace-nowrap">{label}</span>
      <span className="text-slate-400">v</span>
    </button>
  )
}

function ProgressCell({ value, tone }) {
  const toneClass = tone === 'green' ? 'bg-emerald-500' : 'bg-blue-500'

  return (
    <div className="min-w-[128px]">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${toneClass}`} style={{ width: `${Math.max(value, 6)}%` }} />
      </div>
    </div>
  )
}

function GapCell({ gap }) {
  const isImportant = gap <= -20
  const width = Math.min(Math.abs(gap), 50) * 2

  return (
    <div className="min-w-[112px]">
      <span className={`text-sm font-medium ${isImportant ? 'text-rose-600' : gap < 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
        {gap > 0 ? `+${gap}%` : `${gap}%`}
      </span>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        {isImportant ? <div className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-500" style={{ width: `${width}%` }} /> : null}
      </div>
    </div>
  )
}

function SkillSetupModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-sm">
      <section className="w-full max-w-xl rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600">Program Skills Setup</p>
            <h2 className="mt-2 text-xl font-medium text-slate-950">Manage Program Skills</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Define course skill coverage so AI can compare curriculum signals with market demand.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-slate-200 text-sm font-medium text-slate-500 hover:bg-slate-50"
            aria-label="Close program skills setup"
          >
            x
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {[
            'Select program template',
            'Upload course outline',
            'Review AI-extracted skills',
            'Manually adjust skill coverage',
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-4 rounded-[8px] border border-slate-200 bg-slate-50/70 p-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-950">{item}</p>
                <p className="mt-1 text-xs text-slate-500">Placeholder workflow for the prototype.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-[8px] border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Cancel
          </button>
          <button type="button" onClick={onClose} className="rounded-[8px] bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200">
            Save setup draft
          </button>
        </div>
      </section>
    </div>
  )
}

export default function UniversityOverviewPage() {
  const [showSkillSetup, setShowSkillSetup] = useState(false)

  return (
    <div className="mx-auto max-w-[1560px] space-y-6">
      <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">University Workspace</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">University Career Intelligence Hub</h1>
          <p className="mt-2 text-base leading-7 text-slate-500">
            AI-powered insights to strengthen curriculum relevance and graduate outcomes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          {filterOptions.map((label) => <FilterButton key={label} label={label} />)}
          <button
            type="button"
            className="flex h-11 items-center rounded-[8px] bg-slate-950 px-4 text-sm font-medium text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition hover:bg-blue-700"
          >
            Export Report
          </button>
        </div>
      </header>

      <section className="rounded-[8px] border border-blue-100 bg-white/95 p-5 shadow-[0_18px_48px_rgba(30,64,175,0.08)]">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-medium text-slate-950">Program Intelligence at a Glance</h2>
            <p className="mt-1 text-sm text-slate-500">One view of readiness, risk, market fit, and signal confidence.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowSkillSetup(true)}
            className="w-fit rounded-[8px] border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
          >
            Manage Program Skills
          </button>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {overviewMetrics.map((metric) => (
            <article key={metric.label} className="min-w-0 border-l border-slate-100 pl-4 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-4 xl:first:border-l-0 xl:first:pl-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <p className="text-2xl font-medium tracking-tight text-slate-950">{metric.value}</p>
                <span className={`mb-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${metricToneClasses[metric.tone]}`}>
                  {metric.status}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-emerald-600">{metric.change}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{metric.helper}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
        <section className="min-w-0 rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-slate-950">Top Market Skills vs Program Coverage</h2>
              <p className="mt-1 text-sm text-slate-500">Table-style intelligence view of demand, readiness, and intervention priority.</p>
            </div>
            <span className="w-fit rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 ring-1 ring-violet-100">
              Live mock intelligence
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left">
              <thead>
                <tr className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                  <th className="rounded-l-[8px] bg-slate-50 px-3 py-3">Rank</th>
                  <th className="bg-slate-50 px-3 py-3">Skill</th>
                  <th className="bg-slate-50 px-3 py-3">Market Demand</th>
                  <th className="bg-slate-50 px-3 py-3">Program Coverage</th>
                  <th className="bg-slate-50 px-3 py-3">Coverage Gap</th>
                  <th className="rounded-r-[8px] bg-slate-50 px-3 py-3">Priority</th>
                </tr>
              </thead>
              <tbody>
                {marketSkills.map((row) => (
                  <tr key={row.skill} className="border-b border-slate-100">
                    <td className="border-b border-slate-100 px-3 py-4 text-sm font-medium text-slate-500">{row.rank}</td>
                    <td className="border-b border-slate-100 px-3 py-4 text-sm font-medium text-slate-950">{row.skill}</td>
                    <td className="border-b border-slate-100 px-3 py-4"><ProgressCell value={row.demand} tone="blue" /></td>
                    <td className="border-b border-slate-100 px-3 py-4"><ProgressCell value={row.coverage} tone="green" /></td>
                    <td className="border-b border-slate-100 px-3 py-4"><GapCell gap={row.gap} /></td>
                    <td className="border-b border-slate-100 px-3 py-4">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${priorityClasses[row.priority]}`}>
                        {row.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs font-medium text-slate-500">
            Market demand data based on mock job postings in the past 60 days
          </p>
        </section>

        <aside className="rounded-[8px] border border-violet-100 bg-gradient-to-br from-white via-violet-50/60 to-blue-50 p-5 shadow-[0_18px_48px_rgba(79,70,229,0.1)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-sm font-semibold text-violet-700 shadow-sm ring-1 ring-violet-100">
              AI
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-600">AI University Advisor</p>
              <h2 className="text-lg font-medium text-slate-950">Key Insight</h2>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Your program excels in core technical skills, but significant gaps in Cloud and MLOps are limiting graduate readiness for high-demand roles.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-950">Recommended Focus</h3>
            <div className="mt-3 space-y-3">
              {advisorFocus.map((item) => (
                <div key={item.title} className="rounded-[8px] border border-white bg-white/80 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-slate-950">{item.title}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${metricToneClasses[item.tone]}`}>
                      {item.impact}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-500">{item.students}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-[8px] border border-blue-100 bg-white/85 p-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">Potential Impact</p>
            <p className="mt-2 text-3xl font-semibold text-blue-700">+14%</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">readiness improvement</p>
            <p className="mt-1 text-xs text-slate-500">Estimated: 3-6 months</p>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-[8px] bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
          >
            View full AI recommendations
          </button>
        </aside>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-lg font-medium text-slate-950">Program Strengths vs Emerging Weaknesses</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] border border-emerald-100 bg-emerald-50/60 p-4">
              <p className="text-sm font-medium text-emerald-800">What We Do Well</p>
              <div className="mt-4 space-y-3">
                {strengths.map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[8px] bg-white px-3 py-3 text-sm font-medium text-slate-800 ring-1 ring-emerald-100">
                    <span>{item}</span>
                    <span className="text-emerald-600">Strong</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-rose-100 bg-rose-50/55 p-4">
              <p className="text-sm font-medium text-rose-800">What We Need To Improve</p>
              <div className="mt-4 space-y-3">
                {weaknesses.map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[8px] bg-white px-3 py-3 text-sm font-medium text-slate-800 ring-1 ring-rose-100">
                    <span>{item}</span>
                    <span className="text-rose-600">Gap</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-slate-950">Recommended Interventions</h2>
              <p className="mt-1 text-sm text-slate-500">Concrete actions mapped to the most urgent coverage gaps.</p>
            </div>
            <Link to="/university/collaboration" className="text-sm font-medium text-blue-700">
              Go to Collaboration Marketplace -&gt;
            </Link>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {interventions.map((item) => (
              <article key={item.title} className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-xs font-semibold text-slate-500">{item.duration}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${metricToneClasses[item.tone]}`}>
                    {item.impact}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      {showSkillSetup ? <SkillSetupModal onClose={() => setShowSkillSetup(false)} /> : null}
    </div>
  )
}

