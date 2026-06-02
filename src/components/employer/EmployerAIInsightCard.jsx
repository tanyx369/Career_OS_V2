import React, { useState } from 'react'

export default function EmployerAIInsightCard({ insight }) {
  const [toast, setToast] = useState('')

  function explore() {
    setToast('AI exploration queued')
    window.setTimeout(() => setToast(''), 1600)
  }

  return (
    <section className="relative rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr_auto] lg:items-center">
        <div className="flex gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-300 to-blue-500 text-2xl font-semibold text-white shadow-lg">
            AI
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-950">AI Insight</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">{insight.summary}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-950">Recommended Actions</h4>
          <ul className="mt-3 space-y-2">
            {insight.recommendedActions.map((action) => (
              <li key={action} className="text-sm text-slate-600">- {action}</li>
            ))}
          </ul>
        </div>
        <button onClick={explore} type="button" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50">
          Explore with AI
        </button>
      </div>
      {toast && <div className="absolute bottom-4 right-4 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">{toast}</div>}
    </section>
  )
}
