import React from 'react'
import SkillTag from '../memory/SkillTag'
import ReadinessGauge from './ReadinessGauge'
import RoadmapStepper from './RoadmapStepper'

export default function CareerPathDetail({ path, fallbackSteps }) {
  const steps = path.roadmapSteps.length ? path.roadmapSteps : fallbackSteps

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-semibold text-slate-950">{path.roleName} Path</h2>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
          Selected Path
        </span>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        {path.roleName === 'Data Analyst'
          ? 'Turn data into decisions. Data Analysts collect, clean, and analyse data to help businesses grow.'
          : path.whyFits}
      </p>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-950">Why this fits you</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{path.whyFits}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">Your strong skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {path.matchingSkills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
              <div className="mt-4 rounded-full bg-emerald-100 px-3 py-2 text-center text-xs font-semibold text-emerald-700">
                {path.matchingSkills.length}/5 skills strong
              </div>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-4">
              <h3 className="text-sm font-semibold text-amber-700">Missing / Need Evidence</h3>
              <div className="mt-3 space-y-2">
                {path.missingSkills.map((skill) => (
                  <p key={skill} className="text-sm text-slate-700">
                    - {skill}
                  </p>
                ))}
              </div>
              <div className="mt-4 rounded-full bg-amber-100 px-3 py-2 text-center text-xs font-semibold text-amber-700">
                {path.missingSkills.length} skills to build
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
          <h3 className="text-center text-sm font-semibold text-slate-950">Your Readiness</h3>
          <ReadinessGauge value={path.readinessScore} label="Job-Ready" text="Keep learning to reach 100%" />
        </div>
      </div>

      <div className="mt-6">
        <RoadmapStepper steps={steps} />
      </div>
    </section>
  )
}
