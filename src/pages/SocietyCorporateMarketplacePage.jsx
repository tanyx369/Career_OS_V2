import React, { useMemo, useState } from 'react'
import AddEventMiniForm from '../components/university/marketplace/AddEventMiniForm'
import ClubEventCard from '../components/university/marketplace/ClubEventCard'
import CompletedEventsCard from '../components/university/marketplace/CompletedEventsCard'
import EventDetailPanel from '../components/university/marketplace/EventDetailPanel'
import FilterChips from '../components/university/marketplace/FilterChips'
import InternalTabNav from '../components/university/marketplace/InternalTabNav'
import MemoryProfileUpdateSummary from '../components/university/marketplace/MemoryProfileUpdateSummary'
import PaginationMock from '../components/university/marketplace/PaginationMock'
import ParticipantUploadCard from '../components/university/marketplace/ParticipantUploadCard'
import RecentProfileUpdatesCard from '../components/university/marketplace/RecentProfileUpdatesCard'
import SkillSuggestionReviewTable from '../components/university/marketplace/SkillSuggestionReviewTable'
import ToastFeedback from '../components/university/marketplace/ToastFeedback'
import WorkflowProgressStepper from '../components/university/marketplace/WorkflowProgressStepper'
import { universityPostEventCompletion, universitySocietyMarketplace } from '../data/mockData'

function filterMatchesNeed(event, filter) {
  if (filter === 'All') return true
  const normalizedFilter = filter.toLowerCase().replace(/s$/, '')
  return event.needs.some((need) => need.toLowerCase().replace(/s$/, '') === normalizedFilter)
}

export default function SocietyCorporateMarketplacePage() {
  const data = universitySocietyMarketplace
  const completionData = universityPostEventCompletion
  const [activeTab, setActiveTab] = useState('Post-Event Completion')
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedEventId, setSelectedEventId] = useState(data.selectedEventId)
  const [selectedCompletedEventId, setSelectedCompletedEventId] = useState(completionData.completedEvents[0].id)
  const [reviewRows, setReviewRows] = useState(completionData.skillSuggestionReview)
  const [showAddForm, setShowAddForm] = useState(false)
  const [toast, setToast] = useState('')

  const filteredEvents = useMemo(
    () => data.events.filter((event) => filterMatchesNeed(event, activeFilter)),
    [activeFilter, data.events],
  )

  const selectedEvent = data.events.find((event) => event.id === selectedEventId) || filteredEvents[0] || data.events[0]
  const selectedCompletedEvent = completionData.completedEvents.find((event) => event.id === selectedCompletedEventId) || completionData.completedEvents[0]
  const isCompletionTab = activeTab === 'Post-Event Completion'

  function showToast(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 2200)
  }

  function updateReviewStatus(studentId, reviewStatus) {
    setReviewRows((rows) => rows.map((row) => (row.studentId === studentId ? { ...row, reviewStatus } : row)))
  }

  function confirmAllRows() {
    setReviewRows((rows) => rows.map((row) => ({ ...row, reviewStatus: 'Confirmed' })))
    showToast('24 participant skill badges confirmed.')
  }

  return (
    <div className="relative space-y-6 pb-24">
      <ToastFeedback message={toast} />

      <header className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Society-Corporate Marketplace</h2>
          <p className="mt-2 max-w-3xl text-base text-slate-500">
            {isCompletionTab
              ? 'Confirm completed events and turn participation into verified student evidence.'
              : 'Connect student clubs with companies for talks, competitions, workshops, and mentorship.'}
          </p>
        </div>
        {isCompletionTab ? (
          <div className="flex max-w-xl items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-5 py-4 text-sm font-semibold leading-6 text-emerald-800 shadow-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">OK</span>
            <span>Verified club participation now becomes structured evidence in each student's Memory Profile.</span>
            <span className="ml-auto text-emerald-500">x</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowAddForm((open) => !open)}
            className="flex h-12 w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,0.22)]"
          >
            <span className="text-lg leading-none">+</span>
            Add New Event
          </button>
        )}
      </header>

      <InternalTabNav activeTab={activeTab} onChange={setActiveTab} />

      {isCompletionTab ? (
        <div className="space-y-6">
          <section className="grid gap-5 xl:grid-cols-[1.05fr_1fr_1.1fr]">
            <CompletedEventsCard
              events={completionData.completedEvents}
              selectedEventId={selectedCompletedEventId}
              onSelect={(eventId) => {
                setSelectedCompletedEventId(eventId)
                showToast('Event selected for processing.')
              }}
            />
            <ParticipantUploadCard
              uploadedFile={completionData.uploadedFile}
              participantCount={selectedCompletedEvent.participants}
              onToast={showToast}
            />
            <div className="space-y-5">
              <MemoryProfileUpdateSummary summary={completionData.updateSummary} />
              <WorkflowProgressStepper steps={completionData.workflowProgress} />
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-[1.55fr_0.85fr]">
            <SkillSuggestionReviewTable
              event={selectedCompletedEvent}
              rows={reviewRows}
              onConfirm={(studentId) => {
                updateReviewStatus(studentId, 'Confirmed')
                showToast('Skill badges confirmed.')
              }}
              onEdit={() => showToast('Edit review placeholder.')}
              onReject={(studentId) => {
                updateReviewStatus(studentId, 'Rejected')
                showToast('Skill suggestion rejected.')
              }}
              onConfirmAll={confirmAllRows}
              onToast={showToast}
            />
            <RecentProfileUpdatesCard updates={completionData.recentProfileUpdates} onToast={showToast} />
          </section>

          <footer className="flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span>AI suggestions are based on event descriptions, roles, and activity context.</span>
            <span>Your data is secure and confidential.</span>
            <button type="button" className="font-semibold text-blue-600">Learn more about our methodology</button>
          </footer>
        </div>
      ) : (
        <>
          <FilterChips filters={data.filters} activeFilter={activeFilter} onChange={setActiveFilter} />

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(430px,0.9fr)]">
            <div className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {filteredEvents.map((event) => (
                  <ClubEventCard
                    key={event.id}
                    event={event}
                    selected={selectedEvent.id === event.id}
                    onSelect={() => setSelectedEventId(event.id)}
                  />
                ))}
              </div>

              {filteredEvents.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
                  <p className="font-semibold text-slate-950">No matching events yet.</p>
                  <p className="mt-2 text-sm text-slate-500">Try a different partnership need.</p>
                </div>
              ) : null}

              <PaginationMock />
            </div>

            <EventDetailPanel event={selectedEvent} onToast={showToast} />
          </section>
        </>
      )}

      <AddEventMiniForm
        open={!isCompletionTab && showAddForm}
        onClose={() => setShowAddForm(false)}
        onPost={() => {
          showToast('Event posted to marketplace.')
          setShowAddForm(false)
        }}
      />
    </div>
  )
}
