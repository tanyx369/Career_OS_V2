import React from 'react'

export default function ProfileSummaryCard() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-left text-sm font-semibold text-slate-950">Profile Summary</h3>
      <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-2xl font-semibold text-blue-700 ring-8 ring-slate-50">
        KL
      </div>
      <h4 className="mt-4 text-sm font-semibold text-slate-950">Kinston Lee</h4>
      <p className="mt-1 text-xs text-slate-500">Computer Science Student</p>
      <p className="mt-1 text-xs text-slate-400">kinston@email.com</p>

      <div className="mt-5 divide-y divide-slate-100 text-left">
        {[
          ['Total Experiences', '18'],
          ['Verified', '7'],
          ['Validated', '5'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-500">{label}</span>
            <span className="font-semibold text-slate-950">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
