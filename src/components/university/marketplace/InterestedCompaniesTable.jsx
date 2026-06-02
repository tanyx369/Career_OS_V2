import React from 'react'
import { CompanyStatusBadge } from './MarketplaceBadges'

const companyStyles = {
  Maybank: 'bg-amber-400 text-slate-950',
  Grab: 'bg-emerald-500 text-white',
  Deloitte: 'bg-slate-950 text-white',
}

export default function InterestedCompaniesTable({ companies }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <div className="grid grid-cols-[0.8fr_1.25fr_0.85fr] bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">
        <span>Company</span>
        <span>What They Offered</span>
        <span>Status</span>
      </div>
      {companies.map((company) => (
        <div key={company.companyName} className="grid grid-cols-[0.8fr_1.25fr_0.85fr] items-center gap-3 border-t border-slate-100 px-4 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${companyStyles[company.companyName] || 'bg-slate-100 text-slate-700'}`}>
              {company.companyName.slice(0, 2)}
            </span>
            <span className="font-semibold text-slate-800">{company.companyName}</span>
          </div>
          <p className="leading-5 text-slate-600">{company.offer}</p>
          <CompanyStatusBadge status={company.status} />
        </div>
      ))}
    </div>
  )
}
