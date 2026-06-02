import React from 'react'
import { DemandBadge } from './ReadinessBadges'

const gapIcons = {
  'Cloud Computing': 'CC',
  'Power BI': 'BI',
  SQL: 'DB',
  'Business Communication': 'CM',
  Experimentation: 'AB',
}

function barTone(value) {
  if (value >= 50) return 'bg-rose-500'
  if (value >= 30) return 'bg-orange-400'
  return 'bg-emerald-500'
}

export default function SkillGapHeatmap({ gaps }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="flex items-center gap-2 text-base font-semibold text-slate-950">
        <span className="text-blue-600">GRID</span>
        Skill Gap Heatmap
      </h2>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
        <div className="grid grid-cols-[1.25fr_1.05fr_0.75fr_1.35fr] bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">
          <span>Skill Name</span>
          <span>% Students Missing It</span>
          <span>Market Demand</span>
          <span>Recommended Action</span>
        </div>
        {gaps.map((gap) => (
          <div key={gap.skill} className="grid grid-cols-[1.25fr_1.05fr_0.75fr_1.35fr] items-center border-t border-slate-100 px-4 py-3 text-sm">
            <div className="flex items-center gap-3 font-semibold text-slate-800">
              <span className="w-6 text-xs font-semibold text-blue-500">{gapIcons[gap.skill] || 'SK'}</span>
              {gap.skill}
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 text-base font-semibold text-rose-500">{gap.missingPercent}%</span>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className={`h-2 rounded-full ${barTone(gap.missingPercent)}`} style={{ width: `${gap.missingPercent}%` }} />
              </div>
            </div>
            <DemandBadge value={gap.marketDemand} />
            <button type="button" className="flex items-center justify-between gap-3 text-left text-sm font-semibold text-blue-600">
              {gap.recommendedAction}
              <span>-&gt;</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-500">
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> High (&gt;= 50%)</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-400" /> Medium (30% - 49%)</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Low (&lt; 30%)</span>
      </div>
    </section>
  )
}
