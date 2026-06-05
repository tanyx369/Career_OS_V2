import React from 'react';

interface DeadlineWidgetProps {
  onSelectDate: (date: string) => void;
}

export default function DeadlineWidget({ onSelectDate }: DeadlineWidgetProps) {
  const deadlines = [
    {
      id: 'dl-mckinsey',
      title: 'McKinsey Forward Case Challenge',
      subtitle: 'Deadline in 6 days',
      date: '2025-05-20',
      day: '20',
      month: 'MAY',
    },
    {
      id: 'dl-ai-hackathon',
      title: 'AI for Social Good Hackathon 2025',
      subtitle: 'Deadline in 2 days',
      date: '2025-05-19',
      day: '19',
      month: 'MAY',
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-800">
        <span className="text-amber-500">⚠️</span> Upcoming Deadlines
      </h3>
      <div className="space-y-4">
        {deadlines.map((dl) => (
          <button
            key={dl.id}
            type="button"
            onClick={() => onSelectDate(dl.date)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white p-3 text-left transition hover:border-violet-200 hover:bg-slate-50/30 focus:outline-none"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Calendar Sheet Icon */}
              <div className="flex h-10 w-10 shrink-0 flex-col overflow-hidden rounded-lg border border-slate-200 text-center">
                <div className="bg-rose-500 text-[8px] font-extrabold text-white py-0.5 leading-none uppercase">
                  {dl.month}
                </div>
                <div className="bg-white text-sm font-extrabold text-slate-800 flex-1 flex items-center justify-center leading-none">
                  {dl.day}
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-900 leading-snug">{dl.title}</p>
                <p className="text-[10px] font-extrabold text-rose-500 mt-0.5">{dl.subtitle}</p>
              </div>
            </div>
            <div className="text-[10px] font-extrabold text-slate-400 shrink-0 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5">
              {dl.day} {dl.month}
            </div>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 flex items-center gap-1 text-xs font-bold text-violet-600 transition hover:text-violet-700 hover:underline"
      >
        View all deadlines <span aria-hidden>→</span>
      </button>
    </div>
  );
}
