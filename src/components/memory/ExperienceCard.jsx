import React from 'react'
import CredibilityBadge from './CredibilityBadge'
import EvidenceLink from './EvidenceLink'
import SkillTag from './SkillTag'

const typeStyles = {
  Project: 'bg-violet-50 text-violet-700',
  Club: 'bg-emerald-50 text-emerald-700',
  Internship: 'bg-amber-50 text-amber-700',
  Hackathon: 'bg-indigo-50 text-indigo-700',
  Work: 'bg-blue-50 text-blue-700',
  Course: 'bg-teal-50 text-teal-700',
  Certificate: 'bg-sky-50 text-sky-700',
}

export default function ExperienceCard({ experience }) {
  const iconClass = typeStyles[experience.type] ?? typeStyles.Project

  return (
    <article className="rounded-3xl border border-violet-100/80 bg-white/95 p-5 shadow-[0_14px_34px_rgba(88,63,188,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(88,63,188,0.12)]">
      <div className="grid gap-4 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconClass} text-lg font-bold shadow-sm`}>
          {experience.type.slice(0, 1)}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-base font-bold text-[#11104a]">{experience.title}</h4>
            <span className="rounded-lg bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-700">{experience.type}</span>
          </div>
          <p className="mt-1 text-xs font-bold text-slate-500">
            {experience.role ?? experience.type} - {experience.type}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{experience.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.extractedSkills.map((skill) => (
              <SkillTag key={skill.name}>{skill.name}</SkillTag>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Evidence:</span>
            {experience.evidenceLinks.map((link) => (
              <EvidenceLink key={link}>{link}</EvidenceLink>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CredibilityBadge status={experience.credibility} />
          <button type="button" className="rounded-full p-1 text-slate-400 transition-all hover:bg-violet-50 hover:text-violet-700" aria-label="More options">
            ...
          </button>
        </div>
      </div>
    </article>
  )
}
