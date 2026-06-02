import React from 'react'
import SkillStrengthBadge from './SkillStrengthBadge'

function demandClass(value) {
  return value === 'High' ? 'bg-rose-50 text-rose-600 ring-rose-100' : 'bg-amber-50 text-amber-600 ring-amber-100'
}

export default function InDemandSkillsTable({ skills }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-base font-semibold text-slate-950">Top In-Demand Skills</h3>
      <div className="mt-5 space-y-4">
        <div className="grid grid-cols-[1fr_88px_128px] gap-3 text-xs font-semibold text-slate-400">
          <span>Skill</span>
          <span>Demand</span>
          <span>Your Strength</span>
        </div>
        {skills.map((skill) => (
          <div key={skill.skill} className="grid grid-cols-[1fr_88px_128px] items-center gap-3 text-sm">
            <p className="font-semibold text-slate-700">{skill.skill}</p>
            <span className={`w-fit rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${demandClass(skill.demand)}`}>{skill.demand}</span>
            <div>
              <SkillStrengthBadge value={skill.strength} />
              <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                <div
                  className={`h-1.5 rounded-full ${skill.strength === 'Strong' ? 'bg-emerald-500' : skill.strength === 'Medium' ? 'bg-amber-400' : 'bg-rose-400'}`}
                  style={{ width: `${skill.strengthValue}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="mt-5 flex w-full justify-center text-sm font-semibold text-blue-600 hover:text-blue-700">
        View all 12 skills -&gt;
      </button>
    </section>
  )
}
