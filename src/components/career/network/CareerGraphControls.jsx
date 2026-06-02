import React from 'react'

export default function CareerGraphControls() {
  return (
    <>
      <div className="absolute right-4 top-4 z-20 flex flex-wrap items-center justify-end gap-2 sm:right-5 sm:top-5 sm:gap-3">
        <button type="button" className="rounded-2xl border border-violet-100 bg-white/90 px-3 py-2.5 text-xs font-bold text-violet-700 shadow-sm sm:px-4 sm:py-3">
          View as List
        </button>
        <button type="button" className="h-10 rounded-2xl border border-violet-100 bg-white/90 px-3 text-xs font-bold text-violet-700 shadow-sm sm:h-11">
          Expand
        </button>
      </div>
      <div className="absolute bottom-8 right-4 z-20 flex items-center gap-2 sm:right-5 sm:gap-3">
        <div className="flex h-10 items-center overflow-hidden rounded-2xl border border-violet-100 bg-white/90 text-xs font-bold text-slate-500 shadow-sm sm:h-11">
          <button type="button" className="h-full px-3 sm:px-4">-</button>
          <span className="border-x border-violet-100 px-3 sm:px-4">100%</span>
          <button type="button" className="h-full px-3 sm:px-4">+</button>
        </div>
        <button type="button" className="h-10 rounded-2xl border border-violet-100 bg-white/90 px-3 text-xs font-bold text-violet-700 shadow-sm sm:h-11">
          Reset
        </button>
      </div>
    </>
  )
}
