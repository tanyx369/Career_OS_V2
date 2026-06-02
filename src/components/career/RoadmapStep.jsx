import React from 'react'

const statusStyles = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  'In Progress': 'bg-blue-50 text-blue-700 ring-blue-100',
  'Current Step': 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  Upcoming: 'bg-slate-50 text-slate-500 ring-slate-200',
}

export default function RoadmapStep({ step, index }) {
  return (
    <div className="grid grid-cols-[42px_minmax(0,1fr)] gap-4">
      <div className="relative flex justify-center">
        <div className="absolute bottom-0 top-10 w-px bg-blue-100" />
        <div className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ring-1 ${statusStyles[step.status]}`}>
          {index + 1}
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.03)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 className="text-sm font-semibold text-slate-950">{step.title}</h4>
            <p className="mt-1 text-xs text-slate-500">{step.action}</p>
          </div>
          <span className={`rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[step.status]}`}>{step.status}</span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {step.tags.map((tag) => (
            <span key={tag} className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              {tag}
            </span>
          ))}
          <span className="ml-auto text-xs font-medium text-slate-500">Est. {step.time}</span>
        </div>
      </div>
    </div>
  )
}
