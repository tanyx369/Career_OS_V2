import React from 'react'
import { ImpactBadge } from './ReadinessBadges'

const partnerStyles = {
  aws: 'border-orange-100 bg-orange-50 text-slate-950',
  grab: 'border-emerald-100 bg-emerald-50 text-emerald-600',
  'power-bi': 'border-amber-100 bg-amber-50 text-amber-600',
}

const partnerLabels = {
  aws: 'aws',
  grab: 'Grab',
  'power-bi': 'BI',
}

export default function InterventionCard({ intervention, index }) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">{index + 1}</span>
      <div className={`flex h-12 w-14 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${partnerStyles[intervention.partner] || partnerStyles.aws}`}>
        {partnerLabels[intervention.partner] || intervention.partner}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-indigo-700">{intervention.title}</p>
        <p className="mt-1 text-xs text-slate-500">{intervention.description}</p>
      </div>
      <ImpactBadge value={intervention.impact} />
    </article>
  )
}
