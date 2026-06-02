import React from 'react'

const summaryCards = [
  { key: 'participantsProcessed', label: 'Participants Processed', tone: 'bg-blue-50 text-blue-700' },
  { key: 'suggestedSkills', label: 'Suggested Skills', tone: 'bg-violet-50 text-violet-700' },
  { key: 'confirmedBadges', label: 'Confirmed Badges', tone: 'bg-emerald-50 text-emerald-700' },
  { key: 'pendingReview', label: 'Pending Review', tone: 'bg-amber-50 text-amber-700' },
]

export default function MemoryProfileUpdateSummary({ summary }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">4. Memory Profile Update Summary</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {summaryCards.map((card) => (
          <div key={card.key} className={`rounded-xl p-5 text-center ${card.tone}`}>
            <p className="text-3xl font-semibold text-slate-950">{summary[card.key]}</p>
            <p className="mt-1 text-xs font-medium">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
