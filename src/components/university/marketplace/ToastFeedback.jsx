import React from 'react'

export default function ToastFeedback({ message }) {
  if (!message) return null

  return (
    <div className="fixed right-6 top-24 z-40 rounded-xl border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
      {message}
    </div>
  )
}
