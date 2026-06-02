import React from 'react'
import DemandBadge from './DemandBadge'

export default function MissingSkillItem({ skill }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 last:border-b-0">
      <p className={`text-sm font-semibold ${skill.demand === 'High Demand' ? 'text-rose-600' : 'text-slate-700'}`}>{skill.label}</p>
      <DemandBadge demand={skill.demand} />
    </div>
  )
}
