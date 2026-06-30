import React, { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Command, Sparkles } from 'lucide-react'
import EmployerNav from '../../components/employer/EmployerNav'
import CandidateFilters from '../../components/employer/candidates/CandidateFilters'
import CandidateGridCard from '../../components/employer/candidates/CandidateGridCard'
import CandidateRow from '../../components/employer/candidates/CandidateRow'
import CandidateDetailView from '../../components/employer/candidates/CandidateDetailView'
import { PIPELINE_STAGES, candidates } from '../../data/candidatesData'

function PageHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Candidates</h1>
        <p className="mt-1 text-sm text-gray-500">Your full talent pool — searchable and filterable across every posting and stage</p>
      </div>
      <div className="relative w-full max-w-xl">
        <Sparkles className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#185FA5]" />
        <input
          type="text"
          placeholder="Find candidates with React and SQL available in June…"
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

export default function Candidates() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCandidateId = searchParams.get('candidateId')
  const initialFrom = searchParams.get('from') || 'Candidates'

  const [view, setView] = useState(initialCandidateId ? 'detail' : 'list')
  const [selectedCandidateId, setSelectedCandidateId] = useState(initialCandidateId)
  const [backLabel, setBackLabel] = useState(initialFrom)

  const [candidateList, setCandidateList] = useState(() => candidates.map((c) => ({ ...c })))
  const [query, setQuery] = useState('')
  const [stageFilter, setStageFilter] = useState('All')
  const [sortBy, setSortBy] = useState('matchDesc')
  const [listView, setListView] = useState('grid')

  const [toast, setToast] = useState('')
  const toastRef = useRef(null)

  const showToast = (message) => {
    window.clearTimeout(toastRef.current)
    setToast(message)
    toastRef.current = window.setTimeout(() => setToast(''), 2400)
  }

  const filteredCandidates = useMemo(() => {
    let list = candidateList.filter((c) => {
      if (stageFilter !== 'All' && c.pipelineStage !== stageFilter) return false
      if (query) {
        const q = query.toLowerCase()
        const haystack = `${c.name} ${c.university} ${c.course} ${c.skills.join(' ')}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    if (sortBy === 'matchDesc') list = [...list].sort((a, b) => b.matchScore - a.matchScore)
    else if (sortBy === 'nameAsc') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    else if (sortBy === 'recentlyApplied') list = [...list].slice().reverse()

    return list
  }, [candidateList, query, stageFilter, sortBy])

  const selectedCandidate = candidateList.find((c) => c.id === selectedCandidateId) || null

  const openCandidate = (candidate, from = 'Candidates') => {
    setSelectedCandidateId(candidate.id)
    setBackLabel(from)
    setView('detail')
    setSearchParams({ candidateId: candidate.id, from })
  }

  const goBack = () => {
    setView('list')
    setSearchParams({})
  }

  const handleMoveStage = (candidate) => {
    const currentIndex = PIPELINE_STAGES.indexOf(candidate.pipelineStage)
    const next = PIPELINE_STAGES[currentIndex + 1]
    if (!next) {
      showToast(`${candidate.name} is already at the final stage`)
      return
    }
    setCandidateList((prev) => prev.map((c) => (c.id === candidate.id ? { ...c, pipelineStage: next } : c)))
    showToast(`${candidate.name} moved to ${next}`)
  }

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F4F6FB]">
      <EmployerNav />
      <main className="min-w-0 flex-1 overflow-y-auto">
        {view === 'detail' && selectedCandidate ? (
          <CandidateDetailView
            candidate={selectedCandidate}
            backLabel={backLabel}
            onBack={goBack}
            onToast={showToast}
            onMoveStage={handleMoveStage}
          />
        ) : (
          <div className="mx-auto max-w-[1480px] space-y-5 px-6 py-6">
            <PageHeader />
            <CandidateFilters
              query={query}
              onQueryChange={setQuery}
              stageFilter={stageFilter}
              onStageChange={setStageFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              view={listView}
              onViewChange={setListView}
            />

            <p className="text-xs text-gray-400">{filteredCandidates.length} candidate{filteredCandidates.length === 1 ? '' : 's'}</p>

            {listView === 'grid' ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCandidates.map((candidate) => (
                  <CandidateGridCard key={candidate.id} candidate={candidate} onSelect={(c) => openCandidate(c, 'Candidates')} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
                {filteredCandidates.map((candidate) => (
                  <CandidateRow key={candidate.id} candidate={candidate} onSelect={(c) => openCandidate(c, 'Candidates')} />
                ))}
              </div>
            )}

            {filteredCandidates.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-12 text-center shadow-sm">
                <p className="text-sm font-medium text-gray-500">No candidates match your filters.</p>
              </div>
            ) : null}
          </div>
        )}
      </main>
      <DemoToast message={toast} />
    </div>
  )
}
