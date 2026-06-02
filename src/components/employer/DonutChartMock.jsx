import React from 'react'

export default function DonutChartMock({ data }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Candidates by Source</h3>
      <div className="mt-5 flex items-center gap-5">
        <div className="relative h-28 w-28 rounded-full bg-[conic-gradient(#4f46e5_0_42%,#7c3aed_42%_66%,#a78bfa_66%_84%,#bfdbfe_84%_94%,#dbeafe_94%_100%)]">
          <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white">
            <span className="text-xl font-semibold text-slate-950">312</span>
            <span className="text-[10px] text-slate-500">Total</span>
          </div>
        </div>
        <div className="space-y-2">
          {data.map((item) => (
            <p key={item.label} className="text-xs text-slate-600">
              <span className="font-semibold text-slate-900">{item.label}</span> {item.value}%
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
