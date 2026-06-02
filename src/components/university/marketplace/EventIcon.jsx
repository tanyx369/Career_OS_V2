import React from 'react'

const labels = {
  Trophy: 'TR',
  Chart: 'CH',
  Rocket: 'RK',
  Gift: 'GF',
  Brain: 'AI',
  People: 'PE',
}

export default function EventIcon({ type = 'Trophy', size = 'md' }) {
  const sizeClass = size === 'lg' ? 'h-16 w-16 text-base' : 'h-12 w-12 text-sm'

  return (
    <div className={`flex shrink-0 items-center justify-center rounded-2xl bg-violet-50 font-bold text-violet-700 ring-1 ring-violet-100 ${sizeClass}`}>
      {labels[type] || 'EV'}
    </div>
  )
}
