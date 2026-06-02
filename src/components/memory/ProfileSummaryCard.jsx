import React from 'react'

export default function ProfileSummaryCard() {
  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/92 p-5 text-center shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <h3 className="text-left text-base font-bold text-[#11104a]">Profile Summary</h3>
      <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-2xl font-bold text-white shadow-lg shadow-violet-100 ring-8 ring-violet-50">
        ST
      </div>
      <h4 className="mt-4 text-sm font-bold text-[#11104a]">Shirley Tan</h4>
      <p className="mt-1 text-xs font-medium text-slate-500">Computer Science Student</p>
      <p className="mt-1 text-xs text-slate-400">Taylor University</p>

      <div className="mt-5 divide-y divide-violet-50 text-left">
        {[
          ['Total Experiences', '18'],
          ['Verified', '7'],
          ['Validated', '5'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between py-3 text-sm">
            <span className="font-medium text-slate-500">{label}</span>
            <span className="font-bold text-[#11104a]">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
