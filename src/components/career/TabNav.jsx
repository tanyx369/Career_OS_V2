import React from 'react'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <div className="overflow-x-auto border-b border-slate-200">
      <div className="flex min-w-max gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-2 px-1 pb-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            {activeTab === tab.id && <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.45)]" />}
          </button>
        ))}
      </div>
    </div>
  )
}
