import React from 'react'

const toneColors = {
  indigo: '#635bff',
  emerald: '#22a06b',
  rose: '#ef4444',
  blue: '#2563eb',
}

export default function MiniTrendLine({ points = [], tone = 'indigo' }) {
  const color = toneColors[tone] || toneColors.indigo
  const width = 190
  const height = 34
  const max = Math.max(...points, 1)
  const min = Math.min(...points, 0)
  const range = Math.max(max - min, 1)
  const path = points
    .map((point, index) => {
      const x = points.length === 1 ? width : (index / (points.length - 1)) * width
      const y = height - ((point - min) / range) * (height - 8) - 4
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-9 w-full" aria-hidden="true">
      <path d={path} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      {points.map((point, index) => {
        const x = points.length === 1 ? width : (index / (points.length - 1)) * width
        const y = height - ((point - min) / range) * (height - 8) - 4
        return <circle key={`${point}-${index}`} cx={x} cy={y} r="2.2" fill={color} opacity="0.75" />
      })}
    </svg>
  )
}
