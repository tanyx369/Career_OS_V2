import React from 'react'

export default function DropdownMock({ label }) {
  return (
    <button
      type="button"
      className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 sm:w-48"
    >
      <span>{label}</span>
      <span className="text-slate-400">v</span>
    </button>
  )
}
