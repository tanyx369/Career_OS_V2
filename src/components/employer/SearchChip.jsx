import React from 'react';
import { BarChart3, Briefcase, UserRound, X } from 'lucide-react';

export default function SearchChip({ chip, onRemove }) {
  const bgClasses = {
    candidate: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    skill: 'bg-blue-50 text-blue-700 ring-blue-100',
    role: 'bg-violet-50 text-violet-700 ring-violet-100',
  };

  const Icon = {
    candidate: UserRound,
    skill: BarChart3,
    role: Briefcase,
  };
  const ChipIcon = Icon[chip.type] || UserRound;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${bgClasses[chip.type]}`}>
      <ChipIcon aria-hidden="true" className="mr-0.5 h-3.5 w-3.5" />
      <span>{chip.value}</span>
      <button
        onClick={() => onRemove(chip.id)}
        className="ml-1 flex h-4 w-4 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200/60 hover:text-slate-600 transition font-bold"
        type="button"
        aria-label={`Remove ${chip.value}`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}
