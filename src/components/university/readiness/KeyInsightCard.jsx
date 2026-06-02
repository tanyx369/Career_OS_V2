import React from 'react'

export default function KeyInsightCard({ insight }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">OK</div>
        <div>
          <p className="text-sm font-semibold text-emerald-700">Key Insight</p>
          <p className="mt-3 max-w-sm text-lg font-semibold leading-7 text-slate-950">{insight}</p>
        </div>
      </div>
      <svg viewBox="0 0 310 120" className="mt-5 h-28 w-full" aria-hidden="true">
        <path d="M12 92 C55 70 72 24 112 58 C150 88 179 57 208 55 C250 52 262 25 298 37" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 6" />
        <path d="M12 96 C55 74 74 31 112 63 C151 92 180 62 208 60 C250 58 263 32 298 43 L298 112 L12 112 Z" fill="url(#readinessInsightFade)" opacity="0.5" />
        <circle cx="208" cy="60" r="6" fill="#22c55e" stroke="white" strokeWidth="3" />
        <g transform="translate(232 57)">
          <ellipse cx="32" cy="34" rx="44" ry="22" fill="#dbeafe" />
          <circle cx="18" cy="26" r="22" fill="#bfdbfe" />
          <circle cx="43" cy="20" r="28" fill="#93c5fd" />
          <rect x="66" y="46" width="32" height="32" rx="16" fill="#ef4444" />
          <path d="M82 55 L82 66" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <circle cx="82" cy="73" r="2.5" fill="white" />
        </g>
        <defs>
          <linearGradient id="readinessInsightFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
