import React, { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Command, Sparkles } from 'lucide-react'
import EmployerNav from '../../components/employer/EmployerNav'
import PostingsRow from '../../components/employer/talent/PostingsRow'
import AIBriefingStrip from '../../components/employer/talent/AIBriefingStrip'
import AIShortlistedList from '../../components/employer/talent/AIShortlistedList'
import AllApplicantsPanel from '../../components/employer/talent/AllApplicantsPanel'
import { candidates, postings } from '../../data/talentDiscoveryData'

function PageHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Talent Discovery</h1>
        <p className="mt-1 text-sm text-gray-500">AI-ranked applicants across your active postings</p>
      </div>

      <div className="relative w-full max-w-xl">
        <Sparkles className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#185FA5]" />
        <input
          type="text"
          placeholder="Show me top applicants for the Software Engineer internship available in June…"
          className="h-11 w-full rounded-full border border-gray-200 bg-white pl-11 pr-16 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-400 focus:border-blue-300"
        />
        <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-0.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
          <Command className="h-3 w-3" /> K
        </span>
      </div>
    </div>
  )
}

function DemoToast({ message }) {
  if (!message) return null
  return (
    <div className="fixed bottom-5 right-5 z-50 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-lg">
      {message}
    </div>
  )
}

export default function TalentDiscovery() {
  const navigate = useNavigate()
  const [selectedPostingId, setSelectedPostingId] = useState(postings[0].id)
  const [statuses, setStatuses] = useState({})
  const [toast, setToast] = useState('')
  const toastRef = useRef(null)

  const selectedPosting = postings.find((p) => p.id === selectedPostingId) || postings[0]

  const sweCandidates = useMemo(() => candidates.filter((c) => c.postingId === 'swe-intern'), [])

  const showToast = (message) => {
    window.clearTimeout(toastRef.current)
    setToast(message)
    toastRef.current = window.setTimeout(() => setToast(''), 2200)
  }

  const handleShortlist = (candidate) => {
    setStatuses((prev) => ({ ...prev, [candidate.id]: 'Shortlisted' }))
    showToast(`${candidate.name} added to shortlist`)
  }

  const handlePass = (candidate) => {
    setStatuses((prev) => ({ ...prev, [candidate.id]: 'Passed' }))
    showToast('Candidate passed')
  }

  const handleContactTop3 = () => {
    showToast('Contacting Ivan Lim, Nur Alya Binti, and Marcus Tan — messages sent.')
  }

  const handleViewAll = () => {
    showToast('Showing all 8 shortlisted candidates')
  }

  const handleView = (candidate) => {
    navigate(`/employer/candidates?candidateId=${candidate.id}&from=${encodeURIComponent('Talent Discovery')}`)
  }

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F4F6FB]">
      <EmployerNav />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1480px] space-y-5 px-6 py-6">
          <PageHeader />

          <PostingsRow selectedPostingId={selectedPostingId} onSelectPosting={setSelectedPostingId} />

          <AIBriefingStrip
            posting={selectedPosting}
            hasFullData={selectedPosting.hasFullData}
            onContactTop3={handleContactTop3}
            onSeeAllShortlisted={handleViewAll}
          />

          {selectedPosting.hasFullData ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.85fr_1fr]">
              <AIShortlistedList
                candidates={sweCandidates.slice(0, 3)}
                statuses={statuses}
                onShortlist={handleShortlist}
                onPass={handlePass}
                onViewAll={handleViewAll}
              />
              <AllApplicantsPanel candidates={sweCandidates} statuses={statuses} onView={handleView} />
            </div>
          ) : (
            <div className="flex h-[300px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white text-center shadow-sm">
              <p className="text-sm font-medium text-gray-500">Loading applicants for {selectedPosting.title}…</p>
            </div>
          )}
        </div>
      </main>
      <DemoToast message={toast} />
    </div>
  )
}
