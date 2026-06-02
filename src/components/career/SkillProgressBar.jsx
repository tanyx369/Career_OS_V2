import React from 'react'
import ProgressBar from '../ui/ProgressBar'

export default function SkillProgressBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-semibold text-slate-600">{value}%</span>
      </div>
      <ProgressBar value={value} />
    </div>
  )
}
