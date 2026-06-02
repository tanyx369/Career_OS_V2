import React from 'react'

export default function MockInput({ label, value, multiline = false }) {
  return (
    <label className={multiline ? 'block sm:col-span-2' : 'block'}>
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      {multiline ? (
        <textarea
          className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
          value={value}
          readOnly
        />
      ) : (
        <input
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
          value={value}
          readOnly
        />
      )}
    </label>
  )
}
