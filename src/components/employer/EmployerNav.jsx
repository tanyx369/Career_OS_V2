import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Bell,
  BarChart3,
  CalendarDays,
  CheckSquare,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  Home,
  Lightbulb,
  Megaphone,
  Users,
  Workflow,
} from 'lucide-react'
import { employerNavTabs, employerUser } from '../../data/employerMockData'

const ICONS = {
  home: Home,
  pipeline: Workflow,
  calendar: CalendarDays,
  people: Users,
  school: GraduationCap,
  campaign: Megaphone,
  analytics: BarChart3,
  insights: Lightbulb,
  tasks: CheckSquare,
  approvals: ClipboardCheck,
  reports: FileText,
}

export default function EmployerNav() {
  const location = useLocation()

  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6">
      <div className="flex items-center gap-8">
        <Link to="/employer/home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#185FA5] text-sm font-bold text-white">C</span>
          <div className="leading-tight">
            <p className="text-base font-bold text-gray-900">CareerOS</p>
            <p className="text-[11px] text-gray-400">Employer Workspace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-gray-500 xl:flex">
          {employerNavTabs.map((tab) => {
            const Icon = ICONS[tab.icon] || Home
            const isActive = location.pathname === tab.to
            return (
              <Link
                key={tab.label}
                to={tab.to}
                className={`flex items-center gap-1.5 border-b-2 pb-1 transition ${
                  isActive ? 'border-[#185FA5] text-[#185FA5]' : 'border-transparent hover:text-gray-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="relative text-gray-400 hover:text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">4</span>
        </button>
        <button type="button" className="text-gray-400 hover:text-gray-600">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button type="button" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
            {employerUser.initials}
          </span>
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-sm font-semibold text-gray-800">{employerUser.name}</p>
            <p className="text-[11px] text-gray-400">{employerUser.company}</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>
    </header>
  )
}
