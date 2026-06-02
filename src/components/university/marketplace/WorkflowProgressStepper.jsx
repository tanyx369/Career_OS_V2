import React from 'react'

export default function WorkflowProgressStepper({ steps }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">5. Workflow Progress</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.label} className="relative flex flex-col items-center text-center">
            {index < steps.length - 1 ? <div className="absolute left-1/2 top-6 hidden h-px w-full bg-slate-200 sm:block" /> : null}
            <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-bold ${
              step.status === 'active' ? 'border-blue-600 bg-blue-600 text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)]' : 'border-slate-200 bg-white text-slate-500'
            }`}>
              {index + 1}
            </div>
            <span className="mt-2 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">OK</span>
            <p className={`mt-2 text-xs font-semibold ${step.status === 'active' ? 'text-blue-700' : 'text-slate-600'}`}>{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
