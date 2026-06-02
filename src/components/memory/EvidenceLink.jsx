import React from 'react'

export default function EvidenceLink({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
      {children}
    </span>
  )
}
