import React from 'react'

export default function MockSelect({ label, value }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <div className="mt-2 flex h-11 items-center justify-between rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
        <span>{value}</span>
        <span className="text-slate-400">v</span>
      </div>
    </label>
  )
}
