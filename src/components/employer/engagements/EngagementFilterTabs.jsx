import React from 'react'
import { engagementFilterTabs } from '../../../data/engagementsData'

export default function EngagementFilterTabs({ activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {engagementFilterTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeTab === tab ? 'bg-blue-600 text-white' : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
