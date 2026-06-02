import React from 'react'

export default function SkillPill({ children, tone = 'blue' }) {
  const styles = {
    blue: 'bg-blue-50 text-blue-800',
    green: 'bg-emerald-50 text-emerald-800',
    red: 'bg-rose-50 text-rose-700 ring-rose-100',
    purple: 'bg-indigo-50 text-indigo-700',
  }

  return <span className={`rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-transparent ${styles[tone]}`}>{children}</span>
}
