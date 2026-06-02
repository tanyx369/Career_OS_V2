import React from 'react'
import AIProposalCard from './AIProposalCard'
import EventIcon from './EventIcon'
import InterestedCompaniesTable from './InterestedCompaniesTable'
import { EventStatusBadge } from './MarketplaceBadges'

export default function EventDetailPanel({ event, onToast }) {
  const companies = event.interestedCompanies.length
    ? event.interestedCompanies
    : [
        { companyName: 'Partner Co', offer: 'Early interest submitted', status: 'Pending' },
        { companyName: 'Industry Lab', offer: 'Workshop support under review', status: 'Accepted' },
      ]
  const proposalPoints = event.aiProposal.length
    ? event.aiProposal
    : [
        'Match confirmed partners to the most urgent event needs first.',
        'Add company visibility across certificates and student showcases.',
        'Publish a post-event impact report for university and partner teams.',
      ]

  return (
    <aside className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.06)] xl:sticky xl:top-24">
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">
        <div className="flex gap-4">
          <EventIcon type={event.icon} size="lg" />
          <div>
            <h2 className="text-lg font-semibold leading-7 text-slate-950">{event.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{event.clubName} - {event.date}</p>
          </div>
        </div>
        <button type="button" className="text-xl text-slate-400" aria-label="Close detail panel">x</button>
      </div>

      <div className="space-y-6 p-5">
        <div className="flex justify-end">
          <EventStatusBadge status={event.status} />
        </div>

        <section>
          <h3 className="text-sm font-semibold text-slate-950">Event Description</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-950">Target Skills</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{event.targetSkills.join(', ')}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-950">Expected Participants</p>
            <div className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
              {event.expectedParticipants.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold text-slate-950">Interested Companies ({companies.length})</h3>
          <InterestedCompaniesTable companies={companies} />
        </section>

        <AIProposalCard points={proposalPoints} />

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onToast('Proposal declined.')}
            className="h-12 rounded-xl border border-rose-300 bg-white text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => onToast('Collaboration proposal accepted.')}
            className="h-12 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(79,70,229,0.22)]"
          >
            Accept Proposal
          </button>
        </div>
      </div>
    </aside>
  )
}
