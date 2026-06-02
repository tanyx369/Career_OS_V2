import React from 'react'

export default function InternalTabNav({ activeTab, onChange }) {
  const tabs = ['Club Event Board', 'Post-Event Completion']

  return (
    <div className="flex gap-7 border-b border-slate-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`border-b-2 px-1 pb-3 text-sm font-semibold transition ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
