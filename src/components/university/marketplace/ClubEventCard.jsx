import React from 'react'
import EventIcon from './EventIcon'
import { EventStatusBadge, NeedTag } from './MarketplaceBadges'

export default function ClubEventCard({ event, selected, onSelect }) {
  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition ${
        selected ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200/80 hover:border-blue-200'
      }`}
    >
      <button type="button" onClick={onSelect} className="block w-full text-left">
        <div className="flex items-start gap-4">
          <EventIcon type={event.icon} />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-950">{event.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{event.clubName}</p>
              </div>
              {selected ? <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">OK</span> : null}
            </div>
          </div>
        </div>

        <div className="mt-5 border-b border-dashed border-slate-200 pb-4 text-sm text-slate-600">
          <span className="font-semibold text-slate-400">Date</span>
          <span className="ml-3">{event.date}</span>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-700">Needs</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {event.needs.map((need) => <NeedTag key={need}>{need}</NeedTag>)}
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600">{event.companiesInterested}</p>
        <div className="mt-3">
          <EventStatusBadge status={event.status} />
        </div>
      </button>

      <button
        type="button"
        onClick={onSelect}
        className="mt-4 h-10 w-full rounded-lg border border-slate-200 bg-white text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50"
      >
        View Details
      </button>
    </article>
  )
}
