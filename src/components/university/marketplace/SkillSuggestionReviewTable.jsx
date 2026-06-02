import React from 'react'
import { ReviewActionButtons, SkillBadge } from './CompletionBadges'

const avatarTone = {
  AR: 'bg-indigo-100 text-indigo-700',
  BO: 'bg-emerald-100 text-emerald-700',
  CL: 'bg-amber-100 text-amber-700',
}

export default function SkillSuggestionReviewTable({ event, rows, onConfirm, onEdit, onReject, onConfirmAll, onToast }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">3. AI Skill Suggestion Review</h2>
      <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
        <span><span className="font-semibold text-slate-800">Event:</span> {event.title}</span>
        <span>|</span>
        <span><span className="font-semibold text-slate-800">Date:</span> {event.completedDate}</span>
        <span>|</span>
        <span><span className="font-semibold text-slate-800">Participants:</span> {event.participants}</span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-slate-100">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-[1.1fr_0.75fr_2.2fr_1.25fr] bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">
            <span>Student</span>
            <span>Role in Event</span>
            <span>AI-Suggested Skills</span>
            <span>Review</span>
          </div>
          {rows.map((row) => (
            <div key={row.studentId} className="grid grid-cols-[1.1fr_0.75fr_2.2fr_1.25fr] items-center gap-3 border-t border-slate-100 px-4 py-3 text-sm">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarTone[row.initials] || 'bg-slate-100 text-slate-700'}`}>
                  {row.initials}
                </span>
                <div>
                  <p className="font-semibold text-slate-950">{row.name}</p>
                  <p className="text-xs text-slate-500">{row.studentId}</p>
                </div>
              </div>
              <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600">
                <option>{row.role}</option>
              </select>
              <div className="flex flex-wrap gap-2">
                {row.suggestedSkills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}
                <button type="button" onClick={() => onToast('Add skill placeholder.')} className="text-xs font-semibold text-blue-600">+ Add Skill</button>
              </div>
              <ReviewActionButtons
                status={row.reviewStatus}
                onConfirm={() => onConfirm(row.studentId)}
                onEdit={() => onEdit(row.studentId)}
                onReject={() => onReject(row.studentId)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-slate-500">Showing 1-3 of {event.participants} participants</p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={onConfirmAll} className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
            Confirm All ({event.participants})
          </button>
          <button type="button" onClick={() => onToast('Bulk edit placeholder.')} className="rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700">
            Bulk Edit
          </button>
          <button type="button" onClick={() => onToast('Review export placeholder.')} className="rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700">
            Export Review
          </button>
        </div>
      </div>
    </section>
  )
}
