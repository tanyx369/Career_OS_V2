import React from 'react'
import RoadmapStep from './RoadmapStep'

export default function RoadmapStepper({ steps }) {
  return (
    <section className="border-t border-slate-100 pt-5">
      <h3 className="text-base font-semibold text-slate-950">Your Learning Roadmap</h3>
      <p className="mt-1 text-sm text-slate-500">Step-by-step plan to become job-ready.</p>
      <div className="mt-5 space-y-4">
        {steps.map((step, index) => (
          <RoadmapStep key={step.title} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}
