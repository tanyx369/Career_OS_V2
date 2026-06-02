import React from 'react'

export default function CredibilityBadge({ status = 'Verified' }) {
  const isVerified = status === 'Verified'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        isVerified ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100' : 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100'
      }`}
    >
      {status}
    </span>
  )
}
