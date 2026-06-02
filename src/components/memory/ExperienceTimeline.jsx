import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function ExperienceTimeline({ experiences }) {
  return (
    <section>
      <h3 className="text-base font-semibold text-slate-950">Experience Timeline</h3>
      <div className="mt-4 space-y-5">
        {experiences.map((experience) => (
          <div key={experience.id} className="grid grid-cols-[62px_22px_minmax(0,1fr)] gap-3">
            <div className="pt-2 text-right">
              <p className="text-[10px] font-semibold uppercase leading-4 text-blue-700">{experience.date.split(' ')[0]}</p>
              <p className="text-sm font-semibold leading-4 text-slate-800">{experience.date.split(' ')[1]}</p>
              <p className="text-[10px] leading-4 text-slate-400">{experience.date.split(' ')[2]}</p>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute bottom-0 top-8 w-px bg-blue-100" />
              <div className="relative mt-3 flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              </div>
            </div>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </section>
  )
}
