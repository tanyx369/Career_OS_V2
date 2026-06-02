import React from 'react'

export default function CircularGauge({ value }) {
  const radius = 58
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative mx-auto h-52 w-52">
      <svg viewBox="0 0 160 160" className="h-full w-full rotate-[-90deg]">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#ede9fe" strokeWidth="14" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="url(#universityGauge)"
          strokeLinecap="round"
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="universityGauge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-5xl font-semibold text-slate-950">{value}</p>
        <p className="text-lg text-slate-500">/100</p>
      </div>
    </div>
  )
}
