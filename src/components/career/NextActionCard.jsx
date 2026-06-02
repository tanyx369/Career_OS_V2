import React from 'react'
import Button from '../ui/Button'

export default function NextActionCard() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Next Best Action</h3>
      <p className="mt-4 text-sm font-semibold text-slate-800">Continue your Power BI learning</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">Finish the dashboard project to level up your visualization skills.</p>
      <Button className="mt-5 w-full">Continue Learning</Button>
    </section>
  )
}
