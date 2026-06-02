import React from 'react'

export default function CTASection({ onClick }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="grid gap-5 md:grid-cols-[0.35fr_1fr_auto] md:items-center">
        <div className="flex h-24 w-32 items-center justify-center rounded-2xl bg-white/80 text-4xl shadow-sm">T</div>
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Prefer to run your own experience?</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Switch to Create Engagement to launch a Micro-Project, Talent Sprint, or Mentorship Pod tailored to your goals.
          </p>
        </div>
        <button
          type="button"
          onClick={onClick}
          className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
        >
          Go to Create Engagement -&gt;
        </button>
      </div>
    </section>
  )
}
