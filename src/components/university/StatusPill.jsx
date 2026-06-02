import React from 'react'

export default function StatusPill({ children, tone = 'blue' }) {
  const styles = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
    red: 'bg-rose-50 text-rose-700 ring-rose-100',
  }

  return <span className={`inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold ring-1 ${styles[tone]}`}>{children}</span>
}
