import React from 'react'

export default function ValidationStatusBadge({ status }) {
  const styles = {
    Pending: 'bg-amber-50 text-amber-700 ring-amber-100',
    Approved: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    Rejected: 'bg-rose-50 text-rose-700 ring-rose-100',
  }

  return <span className={`rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${styles[status]}`}>{status}</span>
}
