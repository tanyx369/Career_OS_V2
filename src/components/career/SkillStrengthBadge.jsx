import React from 'react'

export default function SkillStrengthBadge({ value }) {
  const styles = {
    Strong: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    Medium: 'bg-amber-50 text-amber-700 ring-amber-100',
    Low: 'bg-rose-50 text-rose-700 ring-rose-100',
  }

  return <span className={`rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${styles[value]}`}>{value}</span>
}
