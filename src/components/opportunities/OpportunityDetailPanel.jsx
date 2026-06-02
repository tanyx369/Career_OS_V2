import React from 'react'
import SkillTag from '../memory/SkillTag'
import CTAButton from './CTAButton'
import GapBadge from './GapBadge'
import MatchBadge from './MatchBadge'

export default function OpportunityDetailPanel({ opportunity, onClose, onAction }) {
  if (!opportunity) return null

  return (
    <div className="fixed inset-0 z-40">
      <button className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" type="button" onClick={onClose} aria-label="Close detail panel" />
      <aside className="absolute bottom-0 right-0 top-0 flex w-full max-w-xl flex-col overflow-y-auto bg-white p-6 shadow-2xl sm:rounded-l-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-2">
              <MatchBadge score={opportunity.matchScore} />
              <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                {opportunity.type}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{opportunity.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">{opportunity.fullDescription}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-500">
            Close
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
            <h3 className="text-sm font-semibold text-slate-950">Required skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {opportunity.requiredSkills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">Skills you already have</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {opportunity.existingSkills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
              <h3 className="text-sm font-semibold text-indigo-700">Missing skills it closes</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {opportunity.missingSkillsClosed.map((skill) => (
                  <GapBadge key={skill}>{skill}</GapBadge>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-4">
            <h3 className="text-sm font-semibold text-blue-700">Why this fits you</h3>
            <p className="mt-3 text-sm leading-6 text-blue-900">{opportunity.aiExplanation}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-950">Expected evidence added to Memory Profile</h3>
            <ul className="mt-3 space-y-2">
              {opportunity.expectedEvidence.map((item) => (
                <li key={item} className="text-sm text-slate-600">
                  - {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <CTAButton onClick={onAction} className="mt-6 w-full">
          {opportunity.ctaLabel}
        </CTAButton>
      </aside>
    </div>
  )
}
