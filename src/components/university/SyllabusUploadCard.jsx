import React, { useState } from 'react'
import MockSelect from './MockSelect'
import UploadZone from './UploadZone'

export default function SyllabusUploadCard({ course }) {
  const [loading, setLoading] = useState(false)

  function analyse() {
    setLoading(true)
    window.setTimeout(() => setLoading(false), 1000)
  }

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">1. Syllabus Upload Zone</h2>
      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Course Selector</span>
          <div className="mt-2">
            <MockSelect value={course} />
          </div>
        </label>
        <div>
          <p className="text-sm font-semibold text-slate-700">Upload Syllabus <span className="font-normal text-slate-400">(PDF, DOCX, TXT)</span></p>
          <div className="mt-2"><UploadZone /></div>
        </div>
        <p className="text-center text-xs text-slate-400">or</p>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Paste syllabus content</span>
          <textarea className="mt-2 min-h-20 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50" placeholder="Paste your syllabus content here..." />
          <p className="mt-1 text-right text-xs text-slate-400">0 / 10,000 characters</p>
        </label>
        <button
          type="button"
          onClick={analyse}
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? 'Analysing...' : 'Analyse Curriculum'}
        </button>
      </div>
    </section>
  )
}
