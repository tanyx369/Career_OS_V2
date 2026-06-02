import React, { useMemo, useState } from 'react'
import EmptyState from './EmptyState'
import FilterChips from './FilterChips'
import OpportunityCard from './OpportunityCard'
import OpportunityDetailPanel from './OpportunityDetailPanel'
import SearchInput from './SearchInput'

function filterMatches(opportunity, activeFilter) {
  if (activeFilter === 'All') return true
  if (activeFilter === 'Event') return opportunity.type === 'Event' || opportunity.type === 'Workshop'
  if (activeFilter === 'Project') return opportunity.type === 'Project' || opportunity.type === 'Hackathon'
  return opportunity.type === activeFilter
}

export default function OpportunityMarketplace({ opportunities }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)
  const [toast, setToast] = useState('')

  const filteredOpportunities = useMemo(() => {
    const query = search.trim().toLowerCase()
    return opportunities.filter((opportunity) => {
      const searchable = `${opportunity.title} ${opportunity.type} ${opportunity.skills.join(' ')} ${opportunity.gapClosed}`.toLowerCase()
      return filterMatches(opportunity, activeFilter) && (!query || searchable.includes(query))
    })
  }, [activeFilter, opportunities, search])

  function handleAction(opportunity) {
    const message = opportunity.ctaLabel.includes('Roadmap') ? 'Added to roadmap' : 'Saved to profile plan'
    setToast(message)
    window.setTimeout(() => setToast(''), 1800)
  }

  return (
    <div className="relative space-y-6">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Opportunity Marketplace</h2>
          <p className="mt-1 text-sm text-slate-500">Discover opportunities that build your next career signal.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SearchInput value={search} onChange={setSearch} />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:text-blue-700"
            aria-label="Filter opportunities"
          >
            Filter
          </button>
        </div>
      </header>

      <section className="rounded-3xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-5">
        <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="mt-5">
          {filteredOpportunities.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  onOpen={() => setSelectedOpportunity(opportunity)}
                  onAction={() => handleAction(opportunity)}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl">
          {toast}
        </div>
      )}

      <OpportunityDetailPanel
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onAction={() => selectedOpportunity && handleAction(selectedOpportunity)}
      />
    </div>
  )
}
