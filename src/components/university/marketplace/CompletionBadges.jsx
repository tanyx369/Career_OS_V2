import React from 'react'

export function SkillBadge({ children }) {
  return (
    <span className="inline-flex rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
      {children}
    </span>
  )
}

export function ReviewStatusBadge({ status }) {
  const styles = {
    Confirmed: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    Rejected: 'bg-rose-50 text-rose-700 ring-rose-100',
    Pending: 'bg-amber-50 text-amber-700 ring-amber-100',
  }

  return (
    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ${styles[status] || styles.Pending}`}>
      {status}
    </span>
  )
}

export function ReviewActionButtons({ status, onConfirm, onEdit, onReject }) {
  if (status !== 'Pending') {
    return <ReviewStatusBadge status={status} />
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={onConfirm} className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        Confirm
      </button>
      <button type="button" onClick={onEdit} className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700">
        Edit
      </button>
      <button type="button" onClick={onReject} className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600">
        Reject
      </button>
    </div>
  )
}
