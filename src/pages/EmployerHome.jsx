import React from 'react'
import { Command, Sparkles } from 'lucide-react'
import EmployerNav from '../components/employer/EmployerNav'
import AIBriefingCard from '../components/employer/AIBriefingCard'
import AIActionQueue from '../components/employer/AIActionQueue'
import MetricsPillRow from '../components/employer/MetricsPillRow'
import TopCandidatesCard from '../components/employer/TopCandidatesCard'
import CampusPipelineFunnel from '../components/employer/CampusPipelineFunnel'
import AIOpportunityRadar from '../components/employer/AIOpportunityRadar'
import { employerUser } from '../data/employerMockData'

function PageHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <span aria-hidden="true">☀️</span>
          {employerUser.greeting}
        </h1>
        <p className="mt-1 text-sm text-gray-500">Here&rsquo;s your AI briefing for {employerUser.briefingDate}</p>
      </div>

      <div className="relative w-full max-w-xl">
        <Sparkles className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#185FA5]" />
        <input
          type="text"
          placeholder="Find me software engineering interns from Taylor's or APU available after June…"
          className="h-11 w-full rounded-full border border-gray-200 bg-white pl-11 pr-16 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-400 focus:border-blue-300"
        />
        <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-0.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
          <Command className="h-3 w-3" /> K
        </span>
      </div>
    </div>
  )
}

export default function EmployerHome() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F4F6FB]">
      <EmployerNav />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1480px] space-y-5 px-6 py-6">
          <PageHeader />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">
            <AIBriefingCard />
            <AIActionQueue />
          </div>

          <MetricsPillRow />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1.6fr_1.3fr]">
            <TopCandidatesCard />
            <CampusPipelineFunnel />
            <AIOpportunityRadar />
          </div>
        </div>
      </main>
    </div>
  )
}
