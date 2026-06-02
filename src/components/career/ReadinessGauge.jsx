import React from 'react'

export default function ReadinessGauge({ value, label, text }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (value / 100) * circumference

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="relative h-44 w-44">
        <svg viewBox="0 0 140 140" className="h-full w-full rotate-[-90deg]">
          <circle cx="70" cy="70" r={radius} fill="none" stroke="#eef2f7" strokeWidth="12" />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="url(#readinessGradient)"
            strokeLinecap="round"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
          <defs>
            <linearGradient id="readinessGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold text-slate-950">{value}%</p>
          <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
        </div>
      </div>
      <p className="mt-5 max-w-48 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}
