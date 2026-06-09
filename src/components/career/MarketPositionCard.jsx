import React from 'react';

export default function MarketPositionCard({ score, country }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Your Market Position</h3>
      <div className="mt-4 flex flex-wrap items-end gap-5">
        <div>
          <span className="text-5xl font-semibold text-blue-700">{score}</span>
          <span className="ml-1 text-slate-400">/100</span>
        </div>
        <p className="max-w-52 pb-2 text-sm leading-6 text-slate-500">Better than {score}% of Data Analysts in {country}</p>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" style={{ width: `${score}%` }} />
      </div>
    </section>
  );
}
