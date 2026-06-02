import React from 'react'
import ValidationStatusBadge from './ValidationStatusBadge'

export default function ValidationRequestsTable({ requests }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">Validation Requests</h2>
        <button className="text-xs font-semibold text-indigo-600" type="button">View All Requests</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="text-xs text-slate-400">
            <tr>
              <th className="py-3 font-semibold">Candidate</th>
              <th className="py-3 font-semibold">Skill</th>
              <th className="py-3 font-semibold">Validator / Source</th>
              <th className="py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((request) => (
              <tr key={`${request.candidate}-${request.skill}`}>
                <td className="py-3 font-semibold text-slate-700">{request.candidate}</td>
                <td className="py-3 text-slate-600">{request.skill}</td>
                <td className="py-3 text-slate-600">{request.source}</td>
                <td className="py-3"><ValidationStatusBadge status={request.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-3 text-xs font-semibold text-indigo-600" type="button">View All Validation Activity</button>
    </section>
  )
}
