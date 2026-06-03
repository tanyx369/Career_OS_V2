import React from 'react'
import { Link } from 'react-router-dom'

const outcomeMetrics = [
  { label: 'Employment Rate', value: '93%', change: '+3%', helper: 'vs previous 3 years', tone: 'emerald' },
  { label: 'Avg. Starting Salary', value: 'RM 3,960', change: '+8%', helper: 'vs previous 3 years', tone: 'blue' },
  { label: 'Avg. Time to First Job', value: '2.1 months', change: '-0.4 months', helper: 'faster placement', tone: 'violet' },
  { label: 'Further Studies', value: '22%', change: '+2%', helper: 'vs previous 3 years', tone: 'emerald' },
]

const graduateDestinations = [
  ['Software Engineer', 36],
  ['Data Analyst', 24],
  ['Product Analyst', 16],
  ['QA Engineer', 10],
  ['Others', 14],
]

const hiringCompanies = [
  ['Shopee', 18, 'S'],
  ['Deloitte', 12, 'D'],
  ['AirAsia', 10, 'A'],
  ['Grab', 8, 'G'],
  ['Petronas', 6, 'P'],
  ['Others', 46, 'O'],
]

const alumniFeedback = [
  ['Power BI', 34],
  ['Cloud Deployment', 28],
  ['Advanced SQL', 22],
  ['Communication', 18],
  ['MLOps', 16],
]

const rolePathways = [
  { role: 'Software Engineer', share: '36%', missing: ['Cloud', 'Testing'] },
  { role: 'Data Analyst', share: '24%', missing: ['Power BI', 'Advanced SQL'] },
  { role: 'Product Analyst', share: '16%', missing: ['Communication', 'Product Analytics'] },
]

const toneClasses = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
}

function FilterButton({ label }) {
  return (
    <button
      type="button"
      className="flex h-11 items-center justify-between gap-3 rounded-[8px] border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
    >
      <span>{label}</span>
      <span className="text-slate-400">v</span>
    </button>
  )
}

function MetricCard({ metric }) {
  return (
    <article className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${toneClasses[metric.tone]}`}>
          {metric.change}
        </span>
        <span className="text-xs font-semibold text-slate-500">{metric.helper}</span>
      </div>
    </article>
  )
}

function ProgressRow({ label, value, tone = 'blue' }) {
  const color = tone === 'rose' ? 'bg-gradient-to-r from-orange-400 to-rose-500' : 'bg-gradient-to-r from-blue-500 to-violet-500'

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className={`font-semibold ${tone === 'rose' ? 'text-rose-600' : 'text-slate-700'}`}>{value}%</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function CompanyRow({ company }) {
  const [name, value, initial] = company

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-blue-50 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
        {initial}
      </span>
      <span className="min-w-0 flex-1 text-sm font-medium text-slate-700">{name}</span>
      <span className="text-sm font-semibold text-slate-700">{value}%</span>
    </div>
  )
}

function InsightCard() {
  return (
    <aside className="rounded-[8px] border border-violet-100 bg-gradient-to-br from-white via-violet-50/70 to-blue-50 p-5 shadow-[0_18px_48px_rgba(79,70,229,0.1)]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-sm font-semibold text-violet-700 shadow-sm ring-1 ring-violet-100">AI</span>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-600">Alumni-to-Market Insight</p>
          <h2 className="text-lg font-medium text-slate-950">Key insight</h2>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">
        Alumni outcomes are strong, but feedback shows graduates need more practical business intelligence and cloud deployment exposure.
      </p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-950">Recommended focus</p>
        <div className="mt-3 space-y-3">
          {['Power BI workshop', 'Cloud deployment pathway', 'Advanced SQL project module'].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-[8px] border border-white bg-white/80 p-3 shadow-sm">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ring-1 ${index === 0 ? toneClasses.rose : index === 1 ? toneClasses.blue : toneClasses.violet}`}>
                {index + 1}
              </span>
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

function PathwayMap() {
  return (
    <section className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-lg font-medium text-slate-950">Graduate Role Pathway Map</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Program outcomes connected to common roles and missing skills.</p>
        </div>
        <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">BSc Computer Science</span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div className="rounded-[8px] border border-blue-100 bg-blue-50/60 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-600">Program</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">BSc Computer Science</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">Strong technical graduate pipeline with role-specific capability gaps.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {rolePathways.map((pathway) => (
            <article key={pathway.role} className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{pathway.role}</p>
                  <p className="mt-1 text-xs font-medium text-blue-700">{pathway.share} of graduates</p>
                </div>
                <span className="text-slate-300">-&gt;</span>
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">Missing skills</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {pathway.missing.map((skill) => (
                  <span key={skill} className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700 ring-1 ring-rose-100">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AlumniSignalIntelligencePage() {
  return (
    <div className="mx-auto max-w-[1560px] space-y-6">
      <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">University Intelligence</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Alumni Signal Intelligence</h1>
          <p className="mt-2 text-base leading-7 text-slate-500">Insights from graduate outcomes, hiring patterns, and alumni feedback.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <FilterButton label="Last 3 Years" />
          <FilterButton label="BSc Computer Science" />
          <button type="button" className="h-11 rounded-[8px] bg-blue-600 px-4 text-sm font-medium text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {outcomeMetrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
        <div className="min-w-0 space-y-5">
          <section className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
              <h2 className="text-lg font-medium text-slate-950">Graduate Destinations</h2>
              <p className="mt-1 text-sm text-slate-500">Top roles our graduates are in</p>
              <div className="mt-5 space-y-4">
                {graduateDestinations.map(([label, value]) => <ProgressRow key={label} label={label} value={value} />)}
              </div>
            </article>

            <article className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
              <h2 className="text-lg font-medium text-slate-950">Top Hiring Companies</h2>
              <p className="mt-1 text-sm text-slate-500">Companies that hire our graduates</p>
              <div className="mt-5 space-y-4">
                {hiringCompanies.map((company) => <CompanyRow key={company[0]} company={company} />)}
              </div>
            </article>

            <article className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
              <h2 className="text-lg font-medium text-slate-950">Alumni Feedback</h2>
              <p className="mt-1 text-sm text-slate-500">Skills alumni wish they had learned more</p>
              <div className="mt-5 space-y-4">
                {alumniFeedback.map(([label, value]) => <ProgressRow key={label} label={label} value={value} tone="rose" />)}
              </div>
            </article>
          </section>

          <PathwayMap />
        </div>

        <InsightCard />
      </section>

      <section className="rounded-[8px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50 p-5 shadow-[0_16px_42px_rgba(37,99,235,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Use these alumni signals to update Program-Market Alignment recommendations.</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">Convert graduate feedback and hiring outcomes into curriculum improvement actions.</p>
          </div>
          <Link to="/university/curriculum" className="inline-flex h-11 shrink-0 items-center justify-center rounded-[8px] bg-blue-600 px-4 text-sm font-medium text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700">
            Apply alumni insights to recommendations
          </Link>
        </div>
      </section>
    </div>
  )
}

