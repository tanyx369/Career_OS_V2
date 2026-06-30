import React from 'react'
import { ArrowRight, BarChart3, Bot, Clock, Flag, Users, Zap } from 'lucide-react'
import { actionQueue } from '../../data/employerMockData'

const ICONS = { clock: Clock, zap: Zap, flag: Flag, chart: BarChart3, people: Users }

const ICON_TONES = {
  orange: 'bg-orange-50 text-orange-600',
  yellow: 'bg-yellow-50 text-yellow-600',
  red: 'bg-red-50 text-red-600',
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
}

const PILL_TONES = {
  green: 'bg-green-50 text-green-700',
  orange: 'bg-orange-50 text-orange-700',
  red: 'bg-red-50 text-red-700',
  blue: 'bg-blue-50 text-blue-700',
}

export default function AIActionQueue() {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-[#185FA5]" />
          <h2 className="text-sm font-semibold text-gray-900">AI Action Queue</h2>
        </div>
        <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-semibold text-red-600">5 urgent</span>
      </div>
      <p className="mt-1 text-xs text-gray-400">Recommended actions to move hiring forward</p>

      <div className="mt-4 flex-1 space-y-1">
        {actionQueue.map((action) => {
          const Icon = ICONS[action.icon] || Clock
          return (
            <button
              key={action.id}
              type="button"
              className="flex w-full items-start gap-3 rounded-xl px-2 py-2.5 text-left transition hover:bg-gray-50"
            >
              <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${ICON_TONES[action.tone]}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold leading-5 text-gray-800">{action.text}</span>
                <span className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${PILL_TONES[action.pillTone]}`}>
                  {action.pill}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <button type="button" className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#185FA5] hover:underline">
        View all actions (12)
        <ArrowRight className="h-3 w-3" />
      </button>
    </section>
  )
}
