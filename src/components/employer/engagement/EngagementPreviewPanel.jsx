import React, { useState } from 'react'
import NeedTag from './NeedTag'
import PillChip from './PillChip'
import PreviewMetric from './PreviewMetric'

export default function EngagementPreviewPanel({ type, form, preview, onToast }) {
  const [generating, setGenerating] = useState(false)
  const previewDescription =
    type === 'Micro-Project'
      ? 'Students will analyze real retail data to uncover customer trends, build dashboards, and present insights to solve a business problem.'
      : form.description

  function generateProposal() {
    setGenerating(true)
    window.setTimeout(() => {
      setGenerating(false)
      onToast('Proposal refreshed with AI.')
    }, 800)
  }

  return (
    <aside className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] xl:sticky xl:top-28 xl:self-start">
      <h2 className="text-sm font-semibold text-slate-950">Engagement Preview</h2>
      <div className="mt-6 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">B</div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-950">{form.title}</h3>
            <NeedTag>{type}</NeedTag>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{preview.status}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">{previewDescription}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="text-sm font-semibold text-slate-950">Target Audience</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {preview.targetAudience.map((item) => <PillChip key={item}>{item}</PillChip>)}
        </div>
        <p className="mt-2 text-xs text-slate-500">{form.experienceLevels.join(' - ')}</p>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-slate-950">Key Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {preview.keySkills.map((skill) => <PillChip key={skill}>{skill}</PillChip>)}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-slate-950">Expected Student Value</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {preview.expectedValue.map((value) => (
            <span key={value} className="rounded-xl bg-indigo-50 px-3 py-3 text-center text-xs font-semibold text-indigo-700">
              {value}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 p-4">
        <h3 className="text-sm font-semibold text-slate-950">Estimated Reach</h3>
        <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100">
          {preview.estimatedReach.map((metric) => <PreviewMetric key={metric.label} value={metric.value} label={metric.label} />)}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 p-4">
        <h3 className="text-sm font-semibold text-slate-950">Why this will attract candidates</h3>
        <ul className="mt-3 space-y-2">
          {preview.attractionReasons.map((reason) => (
            <li key={reason} className="text-sm leading-6 text-slate-600">- {reason}</li>
          ))}
        </ul>
      </div>

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
          onClick={() => onToast('Engagement published. Students can now discover it in Opportunity Marketplace.')}
          className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          Publish Engagement
        </button>
        <button type="button" onClick={() => onToast('Draft saved.')} className="w-full px-4 py-3 text-sm font-semibold text-slate-500">
          Save Draft
        </button>
      </div>
    </aside>
  )
}
