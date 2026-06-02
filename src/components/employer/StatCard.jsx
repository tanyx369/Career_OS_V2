import React from 'react'

export default function StatCard({ stat }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-600">{stat.label}</p>
      <p className={`mt-2 text-xs font-semibold ${stat.positive ? 'text-emerald-600' : 'text-rose-600'}`}>{stat.delta}</p>
    </section>
  )
}
