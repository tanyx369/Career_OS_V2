import React, { useState } from 'react'

const suggestions = [
  'Focus on SQL + dashboarding to match employer demand for retail analytics roles.',
  'A 2-week timeline is optimal - short enough to attract, long enough to deliver impact.',
  'Require a portfolio-ready dashboard and executive summary for stronger candidate outcomes.',
]

export default function AISuggestionCard({ onToast }) {
  const [loading, setLoading] = useState(false)

  function refine() {
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      onToast('AI suggestions refined.')
    }, 800)
  }

  return (
    <section className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-center">
        <div className="flex h-28 items-center justify-center rounded-2xl bg-white/70 text-4xl shadow-sm">AI</div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-950">AI Setup Suggestions</h3>
          {suggestions.map((suggestion) => (
            <p key={suggestion} className="rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm">
              {suggestion}
            </p>
          ))}
        </div>
        <button
          type="button"
          onClick={refine}
          disabled={loading}
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50 disabled:opacity-60"
        >
          {loading ? 'Refining...' : 'Refine with AI'}
        </button>
      </div>
    </section>
  )
}
