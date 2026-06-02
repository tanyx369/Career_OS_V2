import React from 'react'
import CredibilityBadge from './CredibilityBadge'
import EvidenceLink from './EvidenceLink'
import SkillTag from './SkillTag'

export default function ExperienceCard({ experience }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-slate-950">{experience.title}</h4>
          <p className="mt-1 text-xs font-medium text-slate-500">
            {experience.role ?? experience.type} - {experience.type}
          </p>
        </div>
        <CredibilityBadge status={experience.credibility} />
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{experience.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.extractedSkills.map((skill) => (
          <SkillTag key={skill.name}>{skill.name}</SkillTag>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">Evidence:</span>
        {experience.evidenceLinks.map((link) => (
          <EvidenceLink key={link}>{link}</EvidenceLink>
        ))}
      </div>
    </article>
  )
}
