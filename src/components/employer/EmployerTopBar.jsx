import React from 'react'
import SignOutButton from '../session/SignOutButton'

export default function EmployerTopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <label className="relative hidden flex-1 lg:block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Search</span>
          <input
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-20 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
            placeholder="for students, skills, universities, and more..."
          />
        </label>
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-indigo-600 shadow-sm" type="button">
          !
        </button>
        <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-sm font-semibold text-white">
            AC
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-950">Alex Chan</p>
            <p className="text-xs text-slate-500">Acme Corp</p>
          </div>
          <span className="text-slate-400">v</span>
        </div>
        <SignOutButton tone="indigo" compact />
      </div>
    </header>
  )
}
