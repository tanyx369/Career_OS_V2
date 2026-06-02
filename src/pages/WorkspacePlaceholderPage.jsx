import React from 'react'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'

export default function WorkspacePlaceholderPage({ title, description }) {
  return (
    <Card className="mx-auto max-w-3xl bg-white/80 backdrop-blur-xl">
      <Tag tone="slate">Workspace Skeleton</Tag>
      <h2 className="mt-4 text-2xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description ?? 'This area is reserved for future role-specific workflow design.'}
      </p>
    </Card>
  )
}
