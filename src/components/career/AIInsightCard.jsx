import React from 'react'

export default function AIInsightCard({ insight, title = 'AI Insight' }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-blue-700">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-blue-900">"{insight.text}"</p>
      {insight.source && <p className="mt-3 text-xs text-slate-500">Source: {insight.source}</p>}
    </section>
  )
}
