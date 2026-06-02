import React from 'react'
import { SkillBadge } from './CompletionBadges'

const avatarTone = {
  AR: 'bg-indigo-100 text-indigo-700',
  BO: 'bg-emerald-100 text-emerald-700',
  CL: 'bg-amber-100 text-amber-700',
}

export default function RecentProfileUpdatesCard({ updates, onToast }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">6. Recent Profile Updates</h2>
        <button type="button" onClick={() => onToast('View all profile updates placeholder.')} className="text-xs font-semibold text-blue-600">View All</button>
      </div>
      <div className="space-y-4">
        {updates.map((update) => (
          <article key={update.studentId} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarTone[update.initials] || 'bg-slate-100 text-slate-700'}`}>
                {update.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-950">{update.name}</p>
                    <p className="text-xs text-slate-500">{update.studentId}</p>
                  </div>
                  <p className="text-xs text-slate-500">{update.time}</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-500">Added Badges</span>
                  {update.badges.map((badge) => <SkillBadge key={badge}>{badge}</SkillBadge>)}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
