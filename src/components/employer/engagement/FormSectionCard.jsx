import React from 'react'

export default function FormSectionCard({ step, title, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">{step}</span>
        <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      </div>
      {children}
    </section>
  )
}
