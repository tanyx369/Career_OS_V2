import React from 'react'

export default function Card({ children, className = '' }) {
  return <section className={`rounded-xl border border-gray-100 bg-white p-5 shadow-sm ${className}`}>{children}</section>
}
