import React from 'react'
const skills = [
  ['Python', 90],
  ['SQL', 80],
  ['Data Analysis', 75],
  ['Machine Learning', 70],
  ['Communication', 65],
]

export default function TopSkillsCard() {
  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/92 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <h3 className="text-base font-bold text-[#11104a]">Top Skills</h3>
      <div className="mt-5 space-y-4">
        {skills.map(([skill, value]) => (
          <div key={skill}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-bold text-[#3f3d78]">{skill}</span>
              <span className="font-semibold text-slate-500">{value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-violet-50">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 text-xs font-bold text-violet-700 hover:text-violet-800" type="button">
        View all skills
      </button>
    </section>
  )
}
