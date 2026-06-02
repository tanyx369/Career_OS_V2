import React from 'react'

const items = [
  ['Verified evidence', '7'],
  ['Needs source link', '3'],
  ['AI extraction quality', '92%'],
]

export default function EvidenceIntegrityCard() {
  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/92 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#11104a]">Evidence Integrity</h3>
        <span className="rounded-xl bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Healthy</span>
      </div>
      <div className="mt-4 space-y-3">
        {items.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-2xl bg-violet-50/50 px-4 py-3 text-sm">
            <span className="font-semibold text-[#3f3d78]">{label}</span>
            <span className="font-bold text-[#11104a]">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
