import React from 'react'

export default function PaginationMock() {
  return (
    <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">Showing 1-6 of 18 events</p>
      <div className="flex items-center gap-2">
        {['<', '1', '2', '3', '>'].map((item) => (
          <button
            key={item}
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold ${
              item === '1' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
