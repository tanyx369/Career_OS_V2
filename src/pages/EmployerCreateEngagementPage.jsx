import React, { useMemo, useState } from 'react'
import AISuggestionCard from '../components/employer/engagement/AISuggestionCard'
import ClubRequestCard from '../components/employer/engagement/ClubRequestCard'
import CTASection from '../components/employer/engagement/CTASection'
import EngagementFilterChips from '../components/employer/engagement/EngagementFilterChips'
import EngagementPreviewPanel from '../components/employer/engagement/EngagementPreviewPanel'
import EngagementTypeCard from '../components/employer/engagement/EngagementTypeCard'
import ExpressInterestPanel from '../components/employer/engagement/ExpressInterestPanel'
import FormSectionCard from '../components/employer/engagement/FormSectionCard'
import InternalTabNav from '../components/employer/engagement/InternalTabNav'
import MockInput from '../components/employer/engagement/MockInput'
import MockSelect from '../components/employer/engagement/MockSelect'
import PillChip from '../components/employer/engagement/PillChip'
import Card from '../components/ui/Card'
import { employerEngagement, employerEngagementBuilder } from '../data/mockData'

const tabs = [
  { id: 'club-collaboration', label: 'Club Collaboration' },
  { id: 'create-engagement', label: 'Create Engagement' },
]

function matchesFilter(request, filter) {
  if (filter === 'All') return true
  const needMap = {
    'Needs Speakers': 'Speaker',
    'Needs Judges': 'Judges',
    'Needs Sponsors': 'Sponsor',
    'Needs Mentors': 'Mentor',
    'Needs Technical Partners': 'Technical Partner',
  }
  return request.needs.includes(needMap[filter])
}

export default function EmployerCreateEngagementPage() {
  const [activeTab, setActiveTab] = useState('club-collaboration')
  const [selectedType, setSelectedType] = useState(employerEngagementBuilder.selectedType)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedRequestId, setSelectedRequestId] = useState(employerEngagement.selectedRequestId)
  const [sentIds, setSentIds] = useState(() => new Set(employerEngagement.clubRequests.filter((request) => request.status === 'Interest Sent').map((request) => request.id)))
  const [toast, setToast] = useState('')

  const selectedRequest = employerEngagement.clubRequests.find((request) => request.id === selectedRequestId)
  const filteredRequests = useMemo(
    () =>
      employerEngagement.clubRequests
        .filter((request) => matchesFilter(request, activeFilter))
        .map((request) => ({ ...request, status: sentIds.has(request.id) ? 'Interest Sent' : request.status })),
    [activeFilter, sentIds],
  )

  function sendInterest(requestId) {
    setSentIds((current) => new Set([...current, requestId]))
    setToast('Interest sent successfully.')
    window.setTimeout(() => setToast(''), 1800)
  }

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Create Engagement</h2>
        <p className="mt-2 text-sm text-slate-500">Build relationships with student talent through collaboration and early experiences.</p>
      </header>

      <InternalTabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'create-engagement' ? (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_430px]">
          <main className="min-w-0 space-y-5">
            <FormSectionCard step="1" title="Choose Engagement Type">
              <div className="flex gap-4 overflow-x-auto pb-1">
                {employerEngagementBuilder.engagementTypes.map((type) => (
                  <EngagementTypeCard key={type} type={type} selected={selectedType === type} onClick={() => setSelectedType(type)} />
                ))}
              </div>
            </FormSectionCard>

            <div className="grid gap-5 lg:grid-cols-2">
              <FormSectionCard step="2" title="Engagement Brief">
                <div className="grid gap-4 sm:grid-cols-2">
                  <MockInput label="Engagement Title" value={employerEngagementBuilder.form.title} />
                  <MockInput label="Goal / Objective" value={employerEngagementBuilder.form.goal} />
                  <MockInput label="Description" value={employerEngagementBuilder.form.description} multiline />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-700">Student Outcomes</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {employerEngagementBuilder.form.outcomes.map((item) => <PillChip key={item}>{item}</PillChip>)}
                  </div>
                </div>
              </FormSectionCard>

              <FormSectionCard step="3" title="Target Audience & Skills">
                {[
                  ['Target roles', employerEngagementBuilder.form.targetRoles],
                  ['Preferred universities', employerEngagementBuilder.form.universities],
                  ['Skill focus', employerEngagementBuilder.form.skillFocus],
                  ['Experience level', employerEngagementBuilder.form.experienceLevels],
                ].map(([label, values]) => (
                  <div key={label} className="mb-4 last:mb-0">
                    <p className="text-xs font-semibold text-slate-700">{label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {values.map((item) => <PillChip key={item}>{item}</PillChip>)}
                      <PillChip selected={false}>+</PillChip>
                    </div>
                  </div>
                ))}
              </FormSectionCard>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <FormSectionCard step="4" title="Format & Timeline">
                <div className="grid gap-4 sm:grid-cols-3">
                  <MockInput label="Start Date" value={employerEngagementBuilder.form.startDate} />
                  <MockSelect label="Duration" value={employerEngagementBuilder.form.duration} />
                  <MockSelect label="Mode" value={employerEngagementBuilder.form.mode} />
                  <MockInput label="Capacity" value={employerEngagementBuilder.form.capacity} />
                  <MockInput label="Application deadline" value={employerEngagementBuilder.form.applicationDeadline} />
                </div>
              </FormSectionCard>

              <FormSectionCard step="5" title="Support & Resources">
                <div className="grid gap-4 sm:grid-cols-3">
                  <MockSelect label="Need mentors" value={employerEngagementBuilder.form.mentorsNeeded} />
                  <MockSelect label="Need judges" value={employerEngagementBuilder.form.judgesNeeded} />
                  <MockSelect label="Budget range" value={employerEngagementBuilder.form.budgetRange} />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-700">Deliverables</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {employerEngagementBuilder.form.deliverables.map((item) => <PillChip key={item}>{item}</PillChip>)}
                    <PillChip selected={false}>+</PillChip>
                  </div>
                </div>
              </FormSectionCard>
            </div>

            <AISuggestionCard onToast={setToast} />
          </main>

          <EngagementPreviewPanel
            type={selectedType}
            form={employerEngagementBuilder.form}
            preview={employerEngagementBuilder.preview}
            onToast={setToast}
          />
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          <main className="min-w-0 space-y-6">
            <EngagementFilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <section className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
              {filteredRequests.map((request) => (
                <ClubRequestCard
                  key={request.id}
                  request={request}
                  onExpressInterest={(nextRequest) => setSelectedRequestId(nextRequest.id)}
                />
              ))}
            </section>
            <CTASection onClick={() => setActiveTab('create-engagement')} />
          </main>

          <ExpressInterestPanel
            request={selectedRequest ? { ...selectedRequest, status: sentIds.has(selectedRequest.id) ? 'Interest Sent' : selectedRequest.status } : null}
            proposalDraft={employerEngagement.proposalDraft}
            onClose={() => setSelectedRequestId(null)}
            onSend={sendInterest}
          />
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl">
          {toast}
        </div>
      )}
    </div>
  )
}
