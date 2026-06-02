import React from 'react'

export default function CredibilityBadge({ status = 'Verified' }) {
  const isVerified = status === 'Verified'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        isVerified ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100' : 'bg-violet-50 text-violet-700 ring-1 ring-violet-100'
      }`}
    >
      {status}
    </span>
  )
}
