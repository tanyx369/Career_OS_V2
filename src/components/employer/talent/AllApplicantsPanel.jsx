import React, { useState } from 'react'
import { Filter } from 'lucide-react'
import { moreApplicantsCount, totalApplicantsForSwe } from '../../../data/talentDiscoveryData'

const FILTER_TABS = ['All', 'New', 'Reviewed', 'Shortlisted', 'Passed']

const MATCH_TONE = {
  green: 'bg-[#EAF3DE] text-[#3B6D11]',
  blue: 'bg-[#E6F1FB] text-[#185FA5]',
  gray: 'bg-gray-100 text-gray-500',
}

const STATUS_TONE = {
  Shortlisted: 'bg-green-50 text-green-700',
  New: 'bg-blue-50 text-blue-700',
  Reviewed: 'bg-gray-100 text-gray-600',
  Passed: 'bg-red-50 text-red-600',
}

const AVATAR_BG = ['bg-green-600', 'bg-[#185FA5]', 'bg-indigo-600', 'bg-purple-600', 'bg-teal-600', 'bg-slate-500', 'bg-orange-500', 'bg-pink-500']

export default function AllApplicantsPanel({ candidates, statuses, onView }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const rows = candidates.filter((candidate) => {
    const status = statuses[candidate.id] || candidate.status
    if (activeFilter === 'All') return true
    return status === activeFilter
  })

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-sm font-bold text-gray-900">All Applicants</h2>
          <span className="text-xs text-gray-400">{totalApplicantsForSwe} total</span>
        </div>
        <button type="button" className="text-gray-400 hover:text-gray-600">
          <Filter className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveFilter(tab)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
              activeFilter === tab ? 'bg-blue-600 text-white' : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-3">
        {rows.map((candidate, index) => {
          const status = statuses[candidate.id] || candidate.status
          const rank = candidates.indexOf(candidate) + 1
          return (
            <div key={candidate.id} className="flex items-center gap-3 border-b border-gray-50 py-2.5 last:border-b-0">
              <span className="w-5 shrink-0 text-xs text-gray-400">{rank}</span>
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_BG[index % AVATAR_BG.length]}`}>
                {candidate.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">{candidate.name}</p>
                <p className="truncate text-xs text-gray-400">{candidate.university}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${MATCH_TONE[candidate.matchTier]}`}>{candidate.matchScore}%</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_TONE[status]}`}>{status}</span>
              <button type="button" onClick={() => onView(candidate)} className="shrink-0 text-xs font-semibold text-[#185FA5] hover:underline">
                View →
              </button>
            </div>
          )
        })}
      </div>

      {activeFilter === 'All' ? (
        <p className="mt-2 text-center text-xs text-gray-400">+ {moreApplicantsCount} more applicants</p>
      ) : null}
    </section>
  )
}
