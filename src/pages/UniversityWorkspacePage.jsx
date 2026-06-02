import React from 'react'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import Tag from '../components/ui/Tag'
import { universityInsights } from '../data/mockData'

export default function UniversityWorkspacePage() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Tag>Student Readiness</Tag>
            <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-slate-950">
              See readiness, skill gaps, and industry alignment from a strategic university lens.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              This workspace frames the university experience without overbuilding analytics before the platform
              architecture is settled.
            </p>
          </div>
          <div className="w-64 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
            <div className="mb-2 flex justify-between text-sm">
              <span>Readiness overview</span>
              <span className="font-semibold text-blue-700">{universityInsights.readinessScore}%</span>
            </div>
            <ProgressBar value={universityInsights.readinessScore} />
          </div>
        </div>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="bg-white/80 backdrop-blur-xl">
          <h3 className="font-semibold text-slate-950">Skill gap summaries</h3>
          <div className="mt-5 space-y-4">
            {universityInsights.curriculumGaps.map((gap) => (
              <div key={gap.skill} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-950">{gap.skill}</p>
                  <Tag tone="indigo">{gap.demandSignal}% demand</Tag>
                </div>
                <p className="mt-3 text-xs text-slate-500">Course coverage: {gap.courseCoverage}%</p>
                <div className="mt-2">
                  <ProgressBar value={gap.courseCoverage} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white/80 backdrop-blur-xl">
          <h3 className="font-semibold text-slate-950">Company collaboration board</h3>
          <div className="mt-5 space-y-4">
            {universityInsights.clubMarketplace.map((item) => (
              <div key={`${item.club}-${item.company}`} className="rounded-2xl border border-slate-100 bg-white/90 p-4">
                <p className="text-sm font-semibold text-slate-950">{item.club}</p>
                <p className="mt-1 text-xs text-slate-500">Partner: {item.company}</p>
                <p className="mt-3 text-sm text-slate-600">{item.proposal}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {['Industry demand trends', 'Curriculum insights'].map((title) => (
          <Card key={title} className="bg-white/75 backdrop-blur-xl">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Placeholder section for future strategic intelligence and market alignment views.
            </p>
          </Card>
        ))}
      </section>
    </div>
  )
}
