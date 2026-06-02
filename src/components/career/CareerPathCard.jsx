import React from 'react'
import SkillTag from '../memory/SkillTag'
import DemandBadge from './DemandBadge'

export default function CareerPathCard({ path, isSelected, isBestMatch, onSelect }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-200 ${
        isSelected ? 'border-blue-400 ring-2 ring-blue-100' : 'border-slate-200/80 hover:-translate-y-0.5 hover:border-blue-200'
      }`}
    >
      {isBestMatch && (
        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Best Match
        </span>
      )}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-lg font-semibold text-blue-700">
        {path.roleName
          .split(' ')
          .map((word) => word[0])
          .slice(0, 2)
          .join('')}
      </div>
      <h3 className="mt-5 text-base font-semibold text-slate-950">{path.roleName}</h3>
      <p className="mt-1 text-sm font-semibold text-blue-700">{path.matchScore}% Fit</p>
      <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">{path.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <DemandBadge demand={path.demandLevel} />
        <span className="text-slate-400">-</span>
        <span className="font-semibold text-slate-600">{path.salaryRange}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {path.matchingSkills.slice(0, 2).map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {path.missingSkills.slice(0, 2).map((skill) => (
          <span key={skill} className="rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
            Build: {skill}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={onSelect}
        className={`mt-5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          isSelected ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-blue-700 ring-1 ring-blue-100 hover:bg-blue-50'
        }`}
      >
        {isSelected ? 'Exploring' : 'View Roadmap'}
      </button>
    </article>
  )
}
