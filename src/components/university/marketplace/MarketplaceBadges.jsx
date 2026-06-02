import React from 'react'

const needStyles = {
  Judges: 'bg-violet-50 text-violet-700 ring-violet-100',
  Judge: 'bg-violet-50 text-violet-700 ring-violet-100',
  Sponsor: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Speaker: 'bg-blue-50 text-blue-700 ring-blue-100',
  Mentor: 'bg-orange-50 text-orange-700 ring-orange-100',
  'Technical Partner': 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  'Case Study Provider': 'bg-slate-50 text-slate-700 ring-slate-100',
  Prizes: 'bg-amber-50 text-amber-700 ring-amber-100',
}

export function NeedTag({ children }) {
  return (
    <span className={`inline-flex items-center rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${needStyles[children] || 'bg-slate-50 text-slate-700 ring-slate-100'}`}>
      {children}
    </span>
  )
}

export function EventStatusBadge({ status }) {
  const isConfirmed = status === 'Partners Confirmed'
  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${isConfirmed ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>
      {status}
    </span>
  )
}

export function CompanyStatusBadge({ status }) {
  const styles = {
    Pending: 'bg-amber-50 text-amber-700',
    Accepted: 'bg-emerald-50 text-emerald-700',
    'Collaboration Confirmed': 'bg-violet-50 text-violet-700',
  }

  return (
    <span className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold ${styles[status] || 'bg-slate-50 text-slate-600'}`}>
      {status}
    </span>
  )
}
