import React from 'react'

export default function AIBriefingStrip({ posting, hasFullData, onContactTop3, onSeeAllShortlisted }) {
  const text = hasFullData
    ? "8 of 47 applicants meet your hiring criteria for Software Engineering Intern. Top pick is Ivan Lim — 96% match with verified project evidence and available June. 2 candidates have expiring availability windows — act today."
    : `Loading applicants for ${posting.title}…`

  return (
    <section
      className="flex flex-wrap items-center gap-4 rounded-xl p-4"
      style={{ backgroundColor: 'rgba(240,246,255,0.8)', border: '1px solid rgba(180,210,255,0.5)' }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#534AB7] text-sm font-semibold text-white">
        n_n
      </span>
      <p className="min-w-0 flex-1 text-sm text-gray-800">{text}</p>
      {hasFullData ? (
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onContactTop3}
            className="rounded-full bg-[#185FA5] px-5 py-2 text-sm font-semibold text-white hover:bg-[#134c87]"
          >
            Contact top 3 now
          </button>
          <button
            type="button"
            onClick={onSeeAllShortlisted}
            className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-white"
          >
            See all 8 shortlisted
          </button>
        </div>
      ) : null}
    </section>
  )
}
