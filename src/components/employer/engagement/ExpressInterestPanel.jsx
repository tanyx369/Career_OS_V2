import React, { useEffect, useMemo, useState } from 'react'
import NeedTag from './NeedTag'

const contributionOptions = ['Judges', 'Sponsor', 'Mentor', 'Technical Partner']

export default function ExpressInterestPanel({ request, proposalDraft, onClose, onSend }) {
  const defaults = useMemo(() => new Set(request?.needs ?? []), [request])
  const [selected, setSelected] = useState(defaults)
  const [proposal, setProposal] = useState(proposalDraft)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    setSelected(defaults)
    setProposal(proposalDraft)
  }, [defaults, proposalDraft])

  if (!request) return null

  function toggle(option) {
    const next = new Set(selected)
    if (next.has(option)) next.delete(option)
    else next.add(option)
    setSelected(next)
  }

  function generateProposal() {
    setGenerating(true)
    window.setTimeout(() => {
      setProposal(
        `We would be excited to support ${request.title} through ${Array.from(selected).join(' and ').toLowerCase()}. Our team can share practical industry context, mentor student teams, and help create stronger evidence for emerging talent.`,
      )
      setGenerating(false)
    }, 700)
  }

  return (
    <aside className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] xl:sticky xl:top-28 xl:self-start">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">Express Interest</h2>
        <button type="button" onClick={onClose} className="text-xl text-slate-400">x</button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-indigo-600 text-sm font-semibold text-white">
          {request.title.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-950">{request.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{request.date}</p>
        </div>
      </div>

      <section className="mt-7">
        <h3 className="text-sm font-semibold text-slate-950">How would you like to contribute?</h3>
        <div className="mt-4 space-y-3">
          {contributionOptions.map((option) => (
            <label key={option} className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                checked={selected.has(option)}
                onChange={() => toggle(option)}
                className="h-5 w-5 rounded border-slate-300 text-blue-600"
              />
              {option}
            </label>
          ))}
        </div>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-5">
        <h3 className="text-sm font-semibold text-slate-950">Draft collaboration proposal</h3>
        <textarea
          className="mt-3 min-h-40 w-full rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
          value={proposal}
          onChange={(event) => setProposal(event.target.value)}
        />
      </section>

      <div className="mt-5 space-y-3">
        <button
          type="button"
          onClick={generateProposal}
          disabled={generating}
          className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50 disabled:opacity-60"
        >
          {generating ? 'Generating...' : 'Generate Proposal'}
        </button>
        <button
          type="button"
          onClick={() => onSend(request.id)}
          className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          Send Interest
        </button>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {request.needs.map((need) => (
          <NeedTag key={need}>{need}</NeedTag>
        ))}
      </div>
    </aside>
  )
}
