import React from 'react'

export default function AddEventMiniForm({ open, onClose, onPost }) {
  if (!open) return null

  return (
    <div className="fixed bottom-5 left-5 z-30 w-[min(560px,calc(100vw-40px))] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-950">Add New Event</h3>
        <button type="button" onClick={onClose} className="text-lg text-slate-400">x</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          Event Title
          <input className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300" placeholder="e.g. AI Workshop" />
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          Club Name
          <select className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300">
            <option>Select club</option>
          </select>
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          Event Date
          <input className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300" placeholder="Select date" />
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600 sm:col-span-3">
          Description
          <input className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300" placeholder="Brief overview of the event..." />
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          What We Need
          <select className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300">
            <option>Select needs</option>
          </select>
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          Target Skills
          <select className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300">
            <option>Select skills</option>
          </select>
        </label>
        <label className="space-y-1 text-xs font-semibold text-slate-600">
          Expected Participants
          <input className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-normal outline-none focus:border-blue-300" placeholder="e.g. 100-150 students" />
        </label>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={onPost}
          className="h-10 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]"
        >
          Post Event
        </button>
      </div>
    </div>
  )
}
