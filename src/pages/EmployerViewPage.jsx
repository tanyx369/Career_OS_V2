import React, { useState } from 'react'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import { employerCandidates } from '../data/mockData'

export default function EmployerViewPage() {
  const [query, setQuery] = useState('')
  const filteredCandidates = employerCandidates.filter((candidate) =>
    `${candidate.name} ${candidate.targetRole} ${candidate.topSkills.join(' ')}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card>
        <Tag>Employer Talent Discovery</Tag>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Search candidates by demonstrated ability.</h2>
        <input
          className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          placeholder="Search role or skill, e.g. React, Product Analyst, SQL"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Card>

      <section className="grid gap-4 lg:grid-cols-3">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{candidate.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{candidate.targetRole}</p>
              </div>
              <Tag tone="green">{candidate.match}%</Tag>
            </div>
            <p className="mt-4 text-sm text-slate-600">{candidate.verifiedEvidence} verified evidence items</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.topSkills.map((skill) => (
                <Tag key={skill} tone="blue">{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </div>
  )
}
