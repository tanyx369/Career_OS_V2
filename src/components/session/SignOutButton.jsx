import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCareerStore } from '../../store/useCareerStore'

export default function SignOutButton({ tone = 'blue', compact = false }) {
  const signOut = useCareerStore((state) => state.signOut)
  const navigate = useNavigate()
  const activeTone = tone === 'indigo' ? 'hover:text-indigo-700' : 'hover:text-blue-700'

  function handleSignOut() {
    signOut()
    navigate('/', { replace: true, state: { signedOut: true } })
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={handleSignOut}
        className={`rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-500 shadow-sm transition-all duration-200 hover:bg-slate-50 ${activeTone}`}
      >
        Sign Out
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-500 transition-all duration-200 hover:bg-white/80 ${activeTone}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-semibold text-slate-500">
        Out
      </span>
      <span>Sign Out</span>
    </button>
  )
}
