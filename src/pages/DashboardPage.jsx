import React from 'react'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import Tag from '../components/ui/Tag'
import { careerPaths, dashboardMetrics, opportunities } from '../data/mockData'
import { useCareerStore } from '../store/useCareerStore'

export default function DashboardPage() {
  const experiences = useCareerStore((state) => state.experiences)
  const topPath = careerPaths[0]

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-soft">
        <div className="max-w-3xl">
          <Tag>Student Dashboard</Tag>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">Your career evidence is becoming a living profile.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            CareerGraph turns projects, internships, clubs, competitions, and certificates into trusted skill signals for roles, opportunities, employers, and universities.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <Card key={metric.label}>
            <p className="text-sm text-slate-500">{metric.label}</p>
            <div className="mt-2 text-2xl font-semibold text-slate-950">{metric.value}</div>
            <p className="mt-2 text-xs text-slate-500">{metric.helper}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-950">Best fit path</h3>
              <p className="mt-1 text-sm text-slate-500">{topPath.fitReason}</p>
            </div>
            <Tag tone="indigo">{topPath.readiness}% ready</Tag>
          </div>
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-700">{topPath.title}</span>
              <span className="text-slate-500">{topPath.readiness}%</span>
            </div>
            <ProgressBar value={topPath.readiness} />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {topPath.missingSkills.map((skill) => (
              <Tag key={skill} tone="slate">
                Gap: {skill}
              </Tag>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-slate-950">Recent evidence</h3>
          <div className="mt-4 space-y-4">
            {experiences.slice(0, 2).map((experience) => (
              <div key={experience.id} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-slate-900">{experience.title}</p>
                  <Tag tone="green">{experience.type}</Tag>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{experience.summary}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card>
        <h3 className="font-semibold text-slate-950">Recommended next actions</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="rounded-xl bg-slate-50 p-4">
              <Tag tone="blue">{opportunity.category}</Tag>
              <h4 className="mt-3 text-sm font-semibold text-slate-950">{opportunity.title}</h4>
              <p className="mt-1 text-xs text-slate-500">{opportunity.provider}</p>
              <p className="mt-3 text-xs font-medium text-blue-700">{opportunity.match}% match for {opportunity.gapCovered}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
