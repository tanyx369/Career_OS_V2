import React from 'react'

export default function CompletedEventsCard({ events, selectedEventId, onSelect }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">1. Completed Events</h2>
        <button type="button" className="text-xs font-semibold text-blue-600">View All</button>
      </div>
      <div className="space-y-3">
        {events.map((event) => (
          <article
            key={event.id}
            className={`flex flex-col gap-3 rounded-xl border px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
              selectedEventId === event.id ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-600 ring-1 ring-emerald-100">OK</span>
              <div>
                <p className="font-semibold text-slate-950">{event.title}</p>
                <p className="mt-1 text-xs text-slate-500">Completed on {event.completedDate}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <p className="text-sm font-semibold text-slate-700">{event.participants} <span className="font-normal text-slate-500">Participants</span></p>
              <button
                type="button"
                onClick={() => onSelect(event.id)}
                className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm"
              >
                Process Event
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
