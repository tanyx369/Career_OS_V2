import React from 'react'
import CohortComparisonCard from '../components/university/readiness/CohortComparisonCard'
import InterventionCard from '../components/university/readiness/InterventionCard'
import KeyInsightCard from '../components/university/readiness/KeyInsightCard'
import ReadinessStatCard from '../components/university/readiness/ReadinessStatCard'
import SkillGapHeatmap from '../components/university/readiness/SkillGapHeatmap'
import StudentDrilldownTable from '../components/university/readiness/StudentDrilldownTable'
import { universityStudentReadiness } from '../data/mockData'

export default function StudentReadinessOverviewPage() {
  const data = universityStudentReadiness

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Student Readiness Overview</h2>
          <p className="mt-2 text-base text-slate-500">See cohort readiness, skill gaps, and intervention opportunities before graduation.</p>
        </div>
        <button type="button" className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Analysed against {data.analysedProfiles}+ student profiles
          <span className="text-blue-500">Refresh</span>
        </button>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.summary.map((item) => <ReadinessStatCard key={item.id} item={item} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <SkillGapHeatmap gaps={data.skillGaps} />
        <CohortComparisonCard cohorts={data.cohortComparison} insight={data.cohortInsight} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.95fr_1fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-950">
            <span className="text-blue-600">AI</span>
            AI-Recommended Interventions
          </h2>
          <div className="mt-5 space-y-3">
            {data.interventions.map((intervention, index) => (
              <InterventionCard key={intervention.title} intervention={intervention} index={index} />
            ))}
          </div>
        </section>

        <StudentDrilldownTable drilldown={data.drilldown} />
        <KeyInsightCard insight={data.keyInsight} />
      </section>

      <footer className="flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span>Scores and insights are AI-generated and for reference only.</span>
        <span>Your data is secure and confidential.</span>
        <button type="button" className="font-semibold text-blue-600">Learn more about our methodology</button>
      </footer>
    </div>
  )
}
