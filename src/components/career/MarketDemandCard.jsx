import React from 'react'

export default function MarketDemandCard() {
  const points = '0,42 24,40 48,39 72,35 96,28 120,36 144,22 168,30 192,27 216,16'

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Market Demand</h3>
      <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-semibold text-emerald-700">High Demand</p>
            <p className="mt-1 text-xs text-slate-500">Growing fast in Malaysia</p>
          </div>
          <span className="rounded-lg bg-white/80 px-2 py-1 text-xs font-semibold text-emerald-700">up</span>
        </div>
        <svg viewBox="0 0 216 52" className="mt-4 h-14 w-full">
          <polyline points={points} fill="none" stroke="#10b981" strokeWidth="3" />
          <path d={`M${points} L216,52 L0,52 Z`} fill="rgba(16,185,129,0.12)" />
        </svg>
      </div>
    </section>
  )
}
