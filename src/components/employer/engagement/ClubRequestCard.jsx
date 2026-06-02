import React from 'react'
import SkillTag from '../../memory/SkillTag'
import MatchScoreBadge from './MatchScoreBadge'
import NeedTag from './NeedTag'

export default function ClubRequestCard({ request, onExpressInterest }) {
  const interestSent = request.status === 'Interest Sent'

  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-indigo-600 text-sm font-semibold text-white">
            {request.title.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-base font-semibold leading-6 text-slate-950">{request.title}</h3>
            <p className="mt-1 text-xs text-slate-500">
              {request.clubName}, {request.university}
            </p>
          </div>
        </div>
        <MatchScoreBadge score={request.matchScore} />
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">{request.date}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {request.needs.map((need) => (
          <NeedTag key={need}>{need}</NeedTag>
        ))}
      </div>
      <p className="mt-5 text-sm font-medium text-slate-700">{request.matchReason}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {request.skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
      <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">{request.description}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {interestSent ? (
          <>
            <button type="button" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Interest Sent
            </button>
            <button type="button" className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-500 ring-1 ring-slate-200">
              Pending Response
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onExpressInterest(request)}
            className="col-span-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Express Interest
          </button>
        )}
      </div>
    </article>
  )
}
