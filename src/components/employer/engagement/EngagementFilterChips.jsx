import React from 'react'

const filters = ['All', 'Needs Speakers', 'Needs Judges', 'Needs Sponsors', 'Needs Mentors', 'Needs Technical Partners']

export default function EngagementFilterChips({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-blue-700 hover:ring-blue-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
