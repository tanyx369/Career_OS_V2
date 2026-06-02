import React from 'react'

export default function MatchScoreBadge({ score }) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative h-16 w-16">
      <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="5" />
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="#14b8a6"
          strokeLinecap="round"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-semibold text-slate-950">{score}%</span>
        <span className="text-[10px] text-slate-500">match</span>
      </div>
    </div>
  )
}
