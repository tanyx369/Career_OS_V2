import React from 'react'

export default function InternalTabNav({ tabs, activeTab, onTabChange }) {
  return (
    <div className="border-b border-slate-200">
      <div className="flex gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`relative whitespace-nowrap px-1 pb-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />}
          </button>
        ))}
      </div>
    </div>
  )
}
