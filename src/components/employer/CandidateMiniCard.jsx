import React from 'react'

export default function CandidateMiniCard({ candidate, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border bg-white p-3 text-left shadow-sm transition-all duration-200 ${
        selected ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200 hover:border-indigo-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 text-xs font-semibold text-indigo-700">
          {candidate.id.slice(-2)}
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-950">Candidate {candidate.id}</p>
          <p className="mt-1 text-xs font-semibold text-emerald-600">{candidate.match}% match</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {candidate.skills.map((skill) => (
          <span key={skill} className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">{candidate.note}</p>
    </button>
  )
}
