import React from 'react'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import Tag from '../components/ui/Tag'
import { universityInsights } from '../data/mockData'

export default function UniversityHubPage() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Tag>University Intelligence Hub</Tag>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Graduate readiness and ecosystem insights.</h2>
            <p className="mt-2 text-sm text-slate-500">Mock insights show where curriculum coverage trails employer demand.</p>
          </div>
          <div className="w-56">
            <div className="mb-2 flex justify-between text-sm">
              <span>Readiness</span>
              <span className="font-semibold text-blue-700">{universityInsights.readinessScore}%</span>
            </div>
            <ProgressBar value={universityInsights.readinessScore} />
          </div>
        </div>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-slate-950">Curriculum gap insights</h3>
          <div className="mt-5 space-y-4">
            {universityInsights.curriculumGaps.map((gap) => (
              <div key={gap.skill} className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-950">{gap.skill}</p>
                  <Tag tone="indigo">{gap.demandSignal}% demand</Tag>
                </div>
                <p className="mt-3 text-xs text-slate-500">Course coverage: {gap.courseCoverage}%</p>
                <div className="mt-2"><ProgressBar value={gap.courseCoverage} /></div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-slate-950">Club-company marketplace</h3>
          <div className="mt-5 space-y-4">
            {universityInsights.clubMarketplace.map((item) => (
              <div key={`${item.club}-${item.company}`} className="rounded-xl border border-slate-100 p-4">
                <p className="text-sm font-semibold text-slate-950">{item.club}</p>
                <p className="mt-1 text-xs text-slate-500">Partner: {item.company}</p>
                <p className="mt-3 text-sm text-slate-600">{item.proposal}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
