import React from 'react'
import { CheckCircle2, Clock, Info, Star, Users, BarChart3 } from 'lucide-react'
import { metricsPills } from '../../data/employerMockData'

const ICONS = { clock: Clock, star: Star, check: CheckCircle2, people: Users, chart: BarChart3 }

export default function MetricsPillRow() {
  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {metricsPills.map((pill) => {
        const Icon = ICONS[pill.icon] || Clock
        return (
          <div key={pill.id} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <Icon className="h-4 w-4 text-[#185FA5]" />
              {pill.info ? <Info className="h-3 w-3 text-gray-300" /> : null}
            </div>
            <p className="mt-2 text-xs text-gray-400">{pill.label}</p>
            <p className="mt-0.5 text-xl font-bold text-gray-900">{pill.value}</p>
            <p className={`mt-1 text-[11px] font-medium ${pill.deltaTone === 'green' ? 'text-green-600' : 'text-red-500'}`}>{pill.delta}</p>
          </div>
        )
      })}
    </section>
  )
}
