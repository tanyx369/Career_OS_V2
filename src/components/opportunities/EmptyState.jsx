import React from 'react'

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
      <h3 className="text-base font-semibold text-slate-950">No matching opportunities yet</h3>
      <p className="mt-2 text-sm text-slate-500">Try another filter or search for a skill like SQL, Python, or Power BI.</p>
    </div>
  )
}
