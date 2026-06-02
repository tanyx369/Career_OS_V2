import React from 'react'

export default function MockSelect({ value }) {
  return (
    <button type="button" className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700">
      <span>{value}</span>
      <span className="text-slate-400">v</span>
    </button>
  )
}
