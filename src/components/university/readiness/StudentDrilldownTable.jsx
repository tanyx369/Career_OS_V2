import React from 'react'
import { StatusBadge } from './ReadinessBadges'

export default function StudentDrilldownTable({ drilldown }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="flex items-center gap-2 text-base font-semibold text-slate-950">
        <span className="text-blue-600">ID</span>
        Student-Level Drilldown
      </h2>
      <div className="mt-4 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">
        Students missing: {drilldown.selectedGap}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <div className="grid grid-cols-[1.1fr_0.8fr_1.35fr_0.8fr] bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">
          <span>Student</span>
          <span>Readiness Score</span>
          <span>Gap Insights</span>
          <span>Status</span>
        </div>
        {drilldown.students.map((student) => (
          <div key={student.id} className="grid grid-cols-[1.1fr_0.8fr_1.35fr_0.8fr] items-center border-t border-slate-100 px-4 py-3 text-sm">
            <span className="font-semibold text-slate-800">{student.id}</span>
            <span>{student.readinessScore} <span className="text-slate-500">/100</span></span>
            <span className="text-slate-600">{student.gapInsight}</span>
            <StatusBadge value={student.status} />
          </div>
        ))}
      </div>
      <button type="button" className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-semibold text-blue-600">
        View more students <span>-&gt;</span>
      </button>
    </section>
  )
}
