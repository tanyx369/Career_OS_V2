import React from 'react'

export default function SkillTag({ children }) {
  return (
    <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
      {children}
    </span>
  )
}
