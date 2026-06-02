import React from 'react'
import CandidateMiniCard from './CandidateMiniCard'

const dots = {
  Shortlisted: 'bg-indigo-500',
  Interviewing: 'bg-blue-500',
  Offer: 'bg-amber-500',
  Hired: 'bg-emerald-500',
}

export default function PipelineColumn({ column, selectedCandidateId, onSelectCandidate }) {
  return (
    <section className="min-w-56 rounded-2xl bg-slate-50/80 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${dots[column.label]}`} />
          <h3 className="text-xs font-semibold text-slate-700">{column.label}</h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">{column.count}</span>
      </div>
      <div className="space-y-3">
        {column.candidates.map((candidate) => (
          <CandidateMiniCard
            key={candidate.id}
            candidate={candidate}
            selected={selectedCandidateId === candidate.id}
            onClick={() => onSelectCandidate(candidate.id)}
          />
        ))}
      </div>
      <button type="button" className="mt-3 text-xs font-semibold text-indigo-600">+ {column.more} more</button>
    </section>
  )
}
