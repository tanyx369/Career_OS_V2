import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function ExperienceTimeline({ experiences }) {
  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/92 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-[#11104a]">Experience Timeline</h3>
          <p className="mt-1 text-xs font-medium text-slate-500">Verified memories that shape your career profile.</p>
        </div>
        <button type="button" className="rounded-2xl border border-violet-100 bg-white px-4 py-2.5 text-xs font-bold text-violet-700 shadow-sm transition-all hover:bg-violet-50">
          Filter
        </button>
      </div>
      <div className="mt-6 space-y-5">
        {experiences.map((experience) => (
          <div key={experience.id} className="grid grid-cols-[54px_22px_minmax(0,1fr)] gap-3 sm:grid-cols-[68px_26px_minmax(0,1fr)]">
            <div className="pt-2 text-right">
              <p className="text-[10px] font-bold uppercase leading-4 text-violet-700">{experience.date.split(' ')[0]}</p>
              <p className="text-sm font-bold leading-4 text-[#11104a]">{experience.date.split(' ')[1]}</p>
              <p className="text-[10px] font-medium leading-4 text-slate-400">{experience.date.split(' ')[2]}</p>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute bottom-[-1.25rem] top-8 w-px bg-gradient-to-b from-violet-200 via-violet-100 to-transparent" />
              <div className="relative mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-violet-50">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-600 shadow-[0_0_16px_rgba(124,58,237,0.5)]" />
              </div>
            </div>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button type="button" className="rounded-2xl border border-violet-100 bg-white px-7 py-3 text-xs font-bold text-violet-700 shadow-sm transition-all hover:bg-violet-50">
          Load more experiences
        </button>
      </div>
    </section>
  )
}
