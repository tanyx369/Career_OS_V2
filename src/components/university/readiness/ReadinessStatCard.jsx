import React from 'react'
import MiniTrendLine from './MiniTrendLine'

const iconClasses = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  rose: 'bg-rose-50 text-rose-600',
  blue: 'bg-blue-50 text-blue-600',
}

const icons = {
  indigo: 'Up',
  emerald: 'Hi',
  rose: 'Lo',
  blue: 'CC',
}

function CloudMock() {
  return (
    <div className="absolute bottom-5 right-6 h-20 w-28 opacity-60" aria-hidden="true">
      <div className="absolute bottom-0 left-2 h-11 w-20 rounded-full bg-blue-100" />
      <div className="absolute bottom-3 left-8 h-14 w-14 rounded-full bg-blue-100" />
      <div className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-indigo-100" />
      <div className="absolute bottom-2 right-5 h-9 w-9 rounded-full bg-white/70" />
    </div>
  )
}

export default function ReadinessStatCard({ item }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-5">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold ${iconClasses[item.tone] || iconClasses.indigo}`}>
          {icons[item.tone] || icons.indigo}
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold text-slate-950">{item.label}</p>
          <div className="mt-3 flex items-end gap-2">
            <p className={`text-5xl font-semibold tracking-tight ${item.tone === 'rose' ? 'text-rose-500' : item.tone === 'emerald' ? 'text-emerald-600' : 'text-indigo-600'}`}>
              {item.value}
            </p>
            {item.suffix ? <span className="pb-2 text-xl text-slate-500">{item.suffix}</span> : null}
          </div>
          <p className="mt-3 text-sm text-slate-500">{item.helper}</p>
          {item.trend ? <div className="mt-3"><MiniTrendLine points={item.trend} tone={item.tone} /></div> : null}
        </div>
      </div>
      {item.illustration === 'cloud' ? <CloudMock /> : null}
    </article>
  )
}
