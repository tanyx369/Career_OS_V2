import React from 'react'

export default function EvidenceLink({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-[#3f3d78] ring-1 ring-violet-100">
      {children}
    </span>
  )
}
