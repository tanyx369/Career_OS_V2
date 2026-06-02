import React, { useState } from 'react'
import DonutChartMock from '../components/employer/DonutChartMock'
import EmployerAIInsightCard from '../components/employer/EmployerAIInsightCard'
import HorizontalBarChartMock from '../components/employer/HorizontalBarChartMock'
import OnboardingTrackerCard from '../components/employer/OnboardingTrackerCard'
import PipelineColumn from '../components/employer/PipelineColumn'
import StatCard from '../components/employer/StatCard'
import ValidationRequestsTable from '../components/employer/ValidationRequestsTable'
import Card from '../components/ui/Card'
import { employerCandidateInsights } from '../data/mockData'

export default function CandidateInsightsPage() {
  const [selectedCandidateId, setSelectedCandidateId] = useState('#1024')
  const data = employerCandidateInsights
  const pipelineColumns = Object.values(data.savedCandidatesPipeline)

  return (
    <div className="space-y-5">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Candidate Insights</h2>
          <p className="mt-1 text-sm text-slate-500">Track your talent pipeline, validation progress, and onboarding readiness.</p>
        </div>
        <button type="button" className="w-fit rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
          May 12 - Jun 11, 2025
        </button>
      </header>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="rounded-2xl border-slate-200/80 bg-white/95 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-950">Saved Candidates</h2>
            <button type="button" className="text-xs font-semibold text-indigo-600">View Full Pipeline</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1">
            {pipelineColumns.map((column) => (
              <PipelineColumn
                key={column.label}
                column={column}
                selectedCandidateId={selectedCandidateId}
                onSelectCandidate={setSelectedCandidateId}
              />
            ))}
          </div>
        </Card>

        <ValidationRequestsTable requests={data.validationRequests} />
      </section>

      <Card className="rounded-2xl border-slate-200/80 bg-white/95 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-950">
            Onboarding Tracker <span className="font-normal text-slate-400">(Hired Candidates Only)</span>
          </h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr_0.9fr]">
          {data.onboardingTracker.map((item) => (
            <OnboardingTrackerCard key={item.candidate} item={item} />
          ))}
          <div className="rounded-2xl bg-indigo-50/70 p-5">
            <h3 className="text-sm font-semibold text-slate-950">Recommended Pre-joining Learning Plan</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Curated learning paths to help new hires get productive from day one.
            </p>
            <button type="button" className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-100">
              View Learning Plans
            </button>
          </div>
        </div>
      </Card>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-950">Pipeline Analytics</h2>
          <button type="button" className="text-xs font-semibold text-indigo-600">Export Report</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.pipelineAnalytics.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DonutChartMock data={data.pipelineAnalytics.candidatesBySource} />
          <HorizontalBarChartMock title="Skills Found vs Skills Missing" data={data.pipelineAnalytics.skillsFoundVsMissing} dual />
          <Card className="rounded-2xl border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-sm font-semibold text-slate-950">Average Readiness Scores</h3>
            <p className="mt-5 text-3xl font-semibold text-slate-950">78 <span className="text-sm text-slate-400">/100</span></p>
            <p className="mt-1 text-xs text-emerald-600">+6 pts vs last 30 days</p>
            <div className="mt-4 space-y-3">
              {data.pipelineAnalytics.readinessByStage.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-xs text-slate-500"><span>{item.label}</span><span>{item.value}</span></div>
                  <div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-indigo-500" style={{ width: `${item.value}%` }} /></div>
                </div>
              ))}
            </div>
          </Card>
          <HorizontalBarChartMock title="Average Readiness by Role" data={data.pipelineAnalytics.readinessByRole} />
        </div>
      </section>

      <EmployerAIInsightCard insight={data.aiInsight} />
    </div>
  )
}
