import React from 'react'

export default function SkillTag({ children }) {
  return (
    <span className="inline-flex rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700 ring-1 ring-violet-100">
      {children}
    </span>
  )
}
