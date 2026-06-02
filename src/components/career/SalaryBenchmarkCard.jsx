import React from 'react'

export default function SalaryBenchmarkCard({ benchmark }) {
  const isAnnual = Boolean(benchmark)

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">
        {isAnnual ? 'Salary Benchmark' : 'Estimated Salary'} <span className="text-slate-400">({isAnnual ? 'Annual' : 'Malaysia'})</span>
      </h3>
      <p className="mt-4 text-2xl font-semibold text-blue-700">{isAnnual ? benchmark.average : 'RM 4,000 - RM 7,000'}</p>
      <p className="mt-1 text-xs text-slate-500">{isAnnual ? 'Average Base Salary' : 'per month'}</p>
      {isAnnual && (
        <p className="mt-2 inline-flex rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
          {benchmark.role} - {benchmark.location}
        </p>
      )}
      <div className="mt-5 h-2 rounded-full bg-slate-100">
        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <p className="text-slate-500">25th</p>
          <p className="mt-1 font-semibold text-slate-800">{isAnnual ? benchmark.p25 : 'RM 3.5K'}</p>
        </div>
        <div>
          <p className="text-slate-500">Median</p>
          <p className="mt-1 font-semibold text-slate-800">{isAnnual ? benchmark.median : 'RM 5.2K'}</p>
        </div>
        <div>
          <p className="text-slate-500">75th</p>
          <p className="mt-1 font-semibold text-slate-800">{isAnnual ? benchmark.p75 : 'RM 7.5K'}</p>
        </div>
      </div>
    </section>
  )
}
