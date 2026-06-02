import React from 'react'
import AIInsightCard from './AIInsightCard'
import DropdownMock from './DropdownMock'
import InDemandSkillsTable from './InDemandSkillsTable'
import MarketPositionCard from './MarketPositionCard'
import MarketTrendChart from './MarketTrendChart'
import SalaryBenchmarkCard from './SalaryBenchmarkCard'
import ShareReportButton from './ShareReportButton'
import SkillStrengthBadge from './SkillStrengthBadge'

export default function MarketStanding({ data }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:justify-end">
        <DropdownMock label={data.location} />
        <DropdownMock label={data.timeRange} />
        <ShareReportButton />
      </div>

      <section className="grid gap-5 2xl:grid-cols-[1.25fr_1.1fr_0.95fr]">
        <MarketTrendChart data={data.trendData} />
        <InDemandSkillsTable skills={data.inDemandSkills} />
        <SalaryBenchmarkCard benchmark={data.salaryBenchmark} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_1.35fr_1fr]">
        <MarketPositionCard score={data.marketPositionScore} />

        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-sm font-semibold text-slate-950">You are strong in</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.strongAreas.map((skill) => (
                <SkillStrengthBadge key={skill} value="Strong" />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.strongAreas.map((skill) => (
                <span key={skill} className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-sm font-semibold text-slate-950">Focus to improve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.improvementAreas.map((skill) => (
                <span key={skill} className="rounded-lg bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <AIInsightCard title="AI Insight" insight={{ text: data.aiInsight }} />
      </section>
    </div>
  )
}
