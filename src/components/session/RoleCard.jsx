import React from 'react'

export default function RoleCard({ role, onSelect }) {
  return (
    <article className="group flex min-h-80 flex-col rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_70px_rgba(37,99,235,0.14)]">
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${role.gradient} text-lg font-semibold text-white shadow-lg`}>
        {role.icon}
      </div>
      <h2 className="mt-7 text-2xl font-semibold text-slate-950">{role.title}</h2>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">{role.description}</p>
      <button
        type="button"
        onClick={onSelect}
        className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600"
      >
        {role.cta}
      </button>
    </article>
  )
}
