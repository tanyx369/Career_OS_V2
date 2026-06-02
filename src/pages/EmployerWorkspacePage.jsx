import React, { useState } from 'react'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import { employerCandidates } from '../data/mockData'

export default function EmployerWorkspacePage() {
  const [query, setQuery] = useState('')
  const filteredCandidates = employerCandidates.filter((candidate) =>
    `${candidate.name} ${candidate.targetRole} ${candidate.topSkills.join(' ')}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-xl">
        <Tag>Talent Discovery</Tag>
        <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-slate-950">
          Find candidates through verified work, skill signals, and fit explanations.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          This employer workspace is intentionally skeletal for now: enough structure to show evidence-based discovery
          without becoming a full ATS.
        </p>
        <input
          className="mt-6 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          placeholder="Search role or skill, e.g. React, Product Analyst, SQL"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Card>

      <section className="grid gap-4 lg:grid-cols-3">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="bg-white/80 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{candidate.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{candidate.targetRole}</p>
              </div>
              <Tag tone="green">{candidate.match}% match</Tag>
            </div>
            <p className="mt-4 text-sm text-slate-600">{candidate.verifiedEvidence} verified evidence items</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.topSkills.map((skill) => (
                <Tag key={skill} tone="blue">
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {['Evidence-based matching', 'Skill graph preview', 'Match explanations', 'Candidate detail preview'].map((title) => (
          <Card key={title} className="bg-white/75 backdrop-blur-xl">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Placeholder section for the employer product story. Detailed interaction design will come later.
            </p>
          </Card>
        ))}
      </section>
    </div>
  )
}
