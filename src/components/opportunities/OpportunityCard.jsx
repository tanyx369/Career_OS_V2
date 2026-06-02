import React from 'react'
import SkillTag from '../memory/SkillTag'
import CTAButton from './CTAButton'
import GapBadge from './GapBadge'
import MatchBadge from './MatchBadge'

export default function OpportunityCard({ opportunity, onOpen, onAction }) {
  const timing = opportunity.deadline
    ? `Deadline: ${opportunity.deadline}`
    : opportunity.duration
      ? `Duration: ${opportunity.duration}`
      : `Date: ${opportunity.date}`

  return (
    <article className="flex min-h-[360px] flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200">
      <div className="flex items-start justify-between gap-3">
        <MatchBadge score={opportunity.matchScore} />
        <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
          {opportunity.type}
        </span>
      </div>
      <h3 className="mt-5 text-base font-semibold leading-6 text-slate-950">{opportunity.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{opportunity.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {opportunity.skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <p className="text-slate-500">{timing}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Gap closed:</span>
          <GapBadge>{opportunity.gapClosed}</GapBadge>
        </div>
      </div>
      <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
        <button
          type="button"
          onClick={onOpen}
          className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100 transition-all duration-200 hover:bg-blue-50"
        >
          Details
        </button>
        <CTAButton onClick={onAction}>{opportunity.ctaLabel}</CTAButton>
      </div>
    </article>
  )
}
