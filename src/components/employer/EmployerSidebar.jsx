import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SignOutButton from '../session/SignOutButton'

const navItems = [
  { label: 'Talent Discovery', path: '/employer/talent', aliases: ['/employer'] },
  { label: 'Candidate Insights', path: '/employer/insights', aliases: [] },
  { label: 'Create Engagement', path: '/employer/posting', aliases: [] },
]

const supportItems = [
  { label: 'Settings', path: '/employer/settings', aliases: [] },
  { label: 'Help', path: '/employer/help', aliases: [] },
]

export default function EmployerSidebar() {
  const location = useLocation()

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-white/70 bg-white/80 px-5 py-6 shadow-[8px_0_30px_rgba(15,23,42,0.03)] backdrop-blur-xl lg:flex lg:flex-col">
      <div className="mb-9">
        <Link to="/" className="text-xl font-semibold text-slate-950">CareerOS</Link>
        <p className="mt-1 text-sm text-slate-500">For Employers</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive || item.aliases.includes(location.pathname)
                  ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <nav className="mt-auto space-y-2 border-t border-slate-100 pt-5">
        {supportItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100' : 'text-slate-500 hover:bg-white/80 hover:text-slate-950'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <SignOutButton tone="indigo" />
      </nav>
    </aside>
  )
}
