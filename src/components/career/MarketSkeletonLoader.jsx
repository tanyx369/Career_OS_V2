import React from 'react';

export default function MarketSkeletonLoader({ isLoading, children }) {
  if (!isLoading) {
    return <div className="transition-all duration-300 ease-in-out opacity-100">{children}</div>;
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-350">
      {/* Loading Banner */}
      <div className="flex items-center justify-center gap-3 rounded-xl bg-blue-50/50 py-3.5 px-4 text-sm font-semibold text-blue-700 ring-1 ring-blue-100/50 animate-pulse">
        <svg className="h-4 w-4 animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Updating market intelligence...</span>
      </div>

      {/* Grid 1 - mirroring the 3 top cards */}
      <section className="grid gap-5 2xl:grid-cols-[1.25fr_1.1fr_0.95fr]">
        {/* Skill Demand Trend Skeleton */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-4 h-[356px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="h-4 w-40 bg-slate-100 rounded animate-pulse" />
            <div className="flex gap-4">
              <div className="h-3.5 w-24 bg-slate-100 rounded animate-pulse" />
              <div className="h-3.5 w-28 bg-slate-100 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between px-4 pb-2 pt-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-8">
                <div className="h-36 w-2 bg-slate-50 rounded animate-pulse" />
                <div className="h-3 w-8 bg-slate-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="h-11 w-full bg-slate-100 rounded-xl animate-pulse" />
        </div>

        {/* Top In-Demand Skills Table Skeleton */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-5 h-[356px]">
          <div className="h-4 w-44 bg-slate-100 rounded animate-pulse" />
          <div className="space-y-4 pt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-[1fr_88px_128px] items-center gap-3">
                <div className="h-4 w-28 bg-slate-100 rounded animate-pulse" />
                <div className="h-6 w-16 bg-slate-50 rounded-lg animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 w-12 bg-slate-100 rounded animate-pulse" />
                  <div className="h-1.5 w-full bg-slate-100 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Benchmark Skeleton */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-5 h-[356px] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="h-4 w-36 bg-slate-100 rounded animate-pulse" />
            <div className="h-8 w-44 bg-blue-100/50 rounded animate-pulse" />
            <div className="h-3 w-28 bg-slate-100 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full animate-pulse" />
            <div className="grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 w-8 bg-slate-50 mx-auto rounded animate-pulse" />
                  <div className="h-4 w-12 bg-slate-100 mx-auto rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid 2 - mirroring bottom cards */}
      <section className="grid gap-5 xl:grid-cols-[1.05fr_1.35fr_1fr]">
        {/* Market Position Skeleton */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-4">
          <div className="h-4 w-36 bg-slate-100 rounded animate-pulse" />
          <div className="flex items-end gap-5 pt-2">
            <div className="h-12 w-24 bg-blue-100/50 rounded animate-pulse" />
            <div className="h-4 w-36 bg-slate-100 rounded animate-pulse" />
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full animate-pulse" />
        </div>

        {/* You are strong / Focus to improve Skeleton */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Strong In */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-4">
            <div className="h-4 w-32 bg-slate-100 rounded animate-pulse" />
            <div className="flex flex-wrap gap-2 pt-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-16 bg-slate-100 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
          {/* Focus to Improve */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-4">
            <div className="h-4 w-32 bg-slate-100 rounded animate-pulse" />
            <div className="flex flex-wrap gap-2 pt-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-20 bg-slate-100 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* AI Insight Skeleton */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.02)] space-y-4">
          <div className="h-4 w-28 bg-slate-100 rounded animate-pulse" />
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
