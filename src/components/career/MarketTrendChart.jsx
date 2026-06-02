import React from 'react'

function linePoints(data, key) {
  return data
    .map((item, index) => {
      const x = 32 + index * 58
      const y = 190 - item[key] * 1.45
      return `${x},${y}`
    })
    .join(' ')
}

export default function MarketTrendChart({ data }) {
  const marketLine = linePoints(data, 'marketDemand')
  const strengthLine = linePoints(data, 'yourStrength')
  const last = data[data.length - 1]

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-950">Skill Demand Trend</h3>
        <div className="flex gap-4 text-xs font-medium text-slate-500">
          <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-600" />Market Demand</span>
          <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />Your Skill Strength</span>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <svg viewBox="0 0 720 250" className="min-w-[680px]">
          {['High', 'Medium', 'Low'].map((label, index) => {
            const y = 45 + index * 70
            return (
              <g key={label}>
                <line x1="32" x2="690" y1={y} y2={y} stroke="#eef2f7" />
                <text x="0" y={y + 4} className="fill-slate-400 text-[11px] font-medium">
                  {label}
                </text>
              </g>
            )
          })}
          <polyline points={marketLine} fill="none" stroke="#2563eb" strokeWidth="3" />
          <polyline points={strengthLine} fill="none" stroke="#10b981" strokeWidth="3" />
          {data.map((item, index) => (
            <text key={item.month} x={32 + index * 58} y="230" textAnchor="middle" className="fill-slate-400 text-[10px]">
              {index % 2 === 0 || index === data.length - 1 ? item.month.replace(' ', '\n') : ''}
            </text>
          ))}
          <g>
            <rect x="520" y="74" width="150" height="78" rx="12" fill="white" stroke="#e2e8f0" />
            <text x="535" y="96" className="fill-slate-500 text-[11px] font-semibold">May 2025</text>
            <text x="535" y="120" className="fill-blue-700 text-[11px] font-semibold">Market Demand</text>
            <text x="625" y="120" className="fill-slate-800 text-[11px] font-semibold">High</text>
            <text x="535" y="140" className="fill-emerald-700 text-[11px] font-semibold">Your Strength</text>
            <text x="625" y="140" className="fill-slate-800 text-[11px] font-semibold">Medium</text>
          </g>
        </svg>
      </div>

      <div className="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
        Overall demand for Data Analyst skills is high and growing 18% in the past year.
      </div>
    </section>
  )
}
