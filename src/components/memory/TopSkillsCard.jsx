import React from 'react'
import ProgressBar from '../ui/ProgressBar'

const skills = [
  ['Python', 90],
  ['SQL', 80],
  ['Data Analysis', 75],
  ['Machine Learning', 70],
  ['Communication', 65],
]

export default function TopSkillsCard() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Top Skills</h3>
      <div className="mt-5 space-y-4">
        {skills.map(([skill, value]) => (
          <div key={skill}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">{skill}</span>
              <span className="text-slate-500">{value}%</span>
            </div>
            <ProgressBar value={value} />
          </div>
        ))}
      </div>
      <button className="mt-5 text-xs font-semibold text-blue-600 hover:text-blue-700" type="button">
        View all skills
      </button>
    </section>
  )
}
