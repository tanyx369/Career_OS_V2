import React from 'react'
import AISuggestionCard from '../components/university/AISuggestionCard'
import AlumniOutcomeCard from '../components/university/AlumniOutcomeCard'
import CurriculumHealthGauge from '../components/university/CurriculumHealthGauge'
import GapHighlightCard from '../components/university/GapHighlightCard'
import SideBySideSkillComparison from '../components/university/SideBySideSkillComparison'
import StatusPill from '../components/university/StatusPill'
import SyllabusUploadCard from '../components/university/SyllabusUploadCard'
import { universityCurriculumAlignment } from '../data/mockData'

export default function CurriculumMarketAlignmentPage() {
  const data = universityCurriculumAlignment

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Curriculum-Market Alignment</h2>
          <p className="mt-2 text-base text-slate-500">Compare course syllabi with real market demand and alumni outcomes.</p>
        </div>
        <button type="button" className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Analysed against {data.analysedJobPostings}+ job postings
          <span className="text-blue-500">Refresh</span>
        </button>
      </header>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_0.7fr_1.35fr]">
        <SyllabusUploadCard course={data.course} />
        <CurriculumHealthGauge score={data.healthScore} status={data.alignmentStatus} summary={data.summary} />
        <SideBySideSkillComparison taught={data.skillsTaught} demanded={data.skillsDemanded} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.95fr_1fr_1.35fr]">
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-base font-semibold text-slate-950">4. Gap Highlights</h2>
          <div className="mt-5 space-y-3">
            {data.gapHighlights.map((gap) => <GapHighlightCard key={gap.skill} gap={gap} />)}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-base font-semibold text-slate-950">5. AI-Generated Suggestions</h2>
          <div className="mt-5 space-y-3">
            {data.aiSuggestions.map((suggestion) => <AISuggestionCard key={suggestion.title} suggestion={suggestion} />)}
          </div>
        </section>

        <AlumniOutcomeCard outcomes={data.alumniOutcomes} />
      </section>

      <footer className="flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span>Scores and insights are AI-generated and for reference only.</span>
        <span>Your data is secure and confidential.</span>
        <button type="button" className="font-semibold text-blue-600">Learn more about our methodology</button>
      </footer>
    </div>
  )
}
