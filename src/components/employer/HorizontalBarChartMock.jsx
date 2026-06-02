import React from 'react'

export default function HorizontalBarChartMock({ title, data, dual = false }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-5 space-y-3">
        {data.map((item) => (
          <div key={item.skill ?? item.label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-semibold text-slate-600">{item.skill ?? item.label}</span>
              <span className="text-slate-400">{dual ? `${item.missing}%` : item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" style={{ width: `${dual ? item.found : item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
