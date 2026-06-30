import React from 'react'
import { ArrowRight, Calendar, Hourglass, ShieldAlert, Sparkles, TrendingUp, User } from 'lucide-react'
import { briefingBoxes, leadershipSnapshot } from '../../data/employerMockData'

const ICONS = { shield: ShieldAlert, user: User, calendar: Calendar, hourglass: Hourglass }

const TONES = {
  red: 'bg-red-50 text-red-600',
  orange: 'bg-orange-50 text-orange-600',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
}

function BriefingBox({ box }) {
  const Icon = ICONS[box.icon] || ShieldAlert
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${TONES[box.tone]}`}>
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-2.5 text-xs font-medium text-gray-500">{box.label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{box.value}</p>
      <p className="mt-1.5 text-xs text-gray-400">{box.detail}</p>
      {box.footer ? (
        <p className={`mt-1 text-xs font-medium ${box.footerTone === 'green' ? 'text-green-600' : 'text-gray-400'}`}>{box.footer}</p>
      ) : null}
      {box.link ? (
        <button type="button" className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-[#185FA5] hover:underline">
          {box.link}
          <ArrowRight className="h-3 w-3" />
        </button>
      ) : null}
    </div>
  )
}

function LeadershipSnapshotBox() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-blue-100 bg-blue-50/60 p-4">
      <div className="flex items-center gap-1.5">
        <TrendingUp className="h-4 w-4 text-[#185FA5]" />
        <p className="text-sm font-semibold text-gray-900">{leadershipSnapshot.label}</p>
      </div>
      <div className="mt-3 flex-1 space-y-2.5">
        {leadershipSnapshot.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-xs">
            <span className="text-gray-500">{row.label}</span>
            <span className="flex items-center gap-1.5 font-semibold text-gray-800">
              {row.value}
              <span className={row.deltaTone === 'green' ? 'text-green-600' : 'text-red-500'}>{row.delta}</span>
            </span>
          </div>
        ))}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{leadershipSnapshot.progressLabel}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-[#185FA5]" style={{ width: `${leadershipSnapshot.progress}%` }} />
          </div>
        </div>
      </div>
      <button type="button" className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#185FA5] hover:underline">
        {leadershipSnapshot.link}
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  )
}

export default function AIBriefingCard() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[#185FA5]" />
        <h2 className="text-sm font-semibold text-gray-900">AI Briefing</h2>
        <span className="text-xs font-medium text-green-600">· Updated 8:30 AM</span>
      </div>
      <p className="mt-1 text-xs text-gray-400">Key insights and priorities based on your hiring data</p>

      <div className="mt-4 grid gap-3 md:grid-cols-[2fr_1fr]">
        <div className="grid grid-cols-2 gap-3">
          {briefingBoxes.map((box) => (
            <BriefingBox key={box.id} box={box} />
          ))}
        </div>
        <LeadershipSnapshotBox />
      </div>
    </section>
  )
}
