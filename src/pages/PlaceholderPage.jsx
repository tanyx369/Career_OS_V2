import React from 'react'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'

export default function PlaceholderPage({ title }) {
  return (
    <Card className="mx-auto max-w-3xl bg-white/80 backdrop-blur-xl">
      <Tag tone="slate">Coming soon</Tag>
      <h2 className="mt-4 text-2xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        This area is intentionally minimal for the student-first MVP. The main experience is focused on Memory Profile,
        Career Intelligence, and Opportunities.
      </p>
    </Card>
  )
}
