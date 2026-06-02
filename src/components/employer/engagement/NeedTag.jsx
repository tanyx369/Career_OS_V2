import React from 'react'

const styles = {
  Judges: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  Sponsor: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Speaker: 'bg-blue-50 text-blue-700 ring-blue-100',
  Mentor: 'bg-orange-50 text-orange-700 ring-orange-100',
  'Technical Partner': 'bg-slate-100 text-blue-700 ring-slate-200',
}

export default function NeedTag({ children }) {
  return <span className={`rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${styles[children] ?? styles.Speaker}`}>{children}</span>
}
