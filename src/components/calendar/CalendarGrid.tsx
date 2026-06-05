import React, { useMemo } from 'react';
import { CalendarEvent, CalendarEventStatus } from './CalendarTypes';

interface CalendarGridProps {
  events: CalendarEvent[];
  selectedDate: string; // YYYY-MM-DD
  onSelectDate: (date: string) => void;
  currentMonth: Date;
  onChangeMonth: (month: Date) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function CalendarGrid({
  events,
  selectedDate,
  onSelectDate,
  currentMonth,
  onChangeMonth,
  activeFilter,
  onFilterChange,
}: CalendarGridProps) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Build grid days
  const gridDays = useMemo(() => {
    // First day of month
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const daysList = [];

    // Leading days (previous month)
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const prevM = month === 0 ? 11 : month - 1;
      const prevY = month === 0 ? year - 1 : year;
      const dateStr = `${prevY}-${(prevM + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      daysList.push({ dateStr, dayNum: d, isCurrentMonth: false });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      daysList.push({ dateStr, dayNum: d, isCurrentMonth: true });
    }

    // Trailing days
    const totalCells = daysList.length <= 35 ? 35 : 42;
    const trailingCount = totalCells - daysList.length;
    for (let d = 1; d <= trailingCount; d++) {
      const nextM = month === 11 ? 0 : month + 1;
      const nextY = month === 11 ? year + 1 : year;
      const dateStr = `${nextY}-${(nextM + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      daysList.push({ dateStr, dayNum: d, isCurrentMonth: false });
    }

    return daysList;
  }, [year, month]);

  // Navigate month
  const handlePrevMonth = () => {
    onChangeMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    onChangeMonth(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    onChangeMonth(new Date(2025, 4, 1)); // Default demo target is May 2025
    onSelectDate('2025-05-17');
  };

  const dotColorClasses: Record<CalendarEventStatus, string> = {
    Registered: 'bg-purple-600',
    Saved: 'bg-blue-600',
    Waitlisted: 'bg-orange-500',
    Completed: 'bg-green-600',
  };

  return (
    <div className="space-y-4">
      {/* Calendar Controls Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
        {/* Left Side: Custom styling filters */}
        <div className="flex flex-wrap gap-2">
          {/* All Events pill */}
          <button
            type="button"
            onClick={() => onFilterChange('all')}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold transition duration-150 ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Events
          </button>
          
          {/* Registered pill */}
          <button
            type="button"
            onClick={() => onFilterChange('Registered')}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition duration-150 ${
              activeFilter === 'Registered'
                ? 'bg-purple-600 border-purple-600 text-white shadow-sm'
                : 'bg-purple-50/70 border-purple-100 text-purple-700 hover:bg-purple-100/80'
            }`}
          >
            Registered
          </button>

          {/* Saved pill */}
          <button
            type="button"
            onClick={() => onFilterChange('Saved')}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition duration-150 ${
              activeFilter === 'Saved'
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'bg-blue-50/70 border-blue-100 text-blue-700 hover:bg-blue-100/80'
            }`}
          >
            Saved
          </button>

          {/* Waitlisted pill */}
          <button
            type="button"
            onClick={() => onFilterChange('Waitlisted')}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition duration-150 ${
              activeFilter === 'Waitlisted'
                ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                : 'bg-orange-50/70 border-orange-100 text-orange-700 hover:bg-orange-100/80'
            }`}
          >
            Waitlisted
          </button>

          {/* Completed pill */}
          <button
            type="button"
            onClick={() => onFilterChange('Completed')}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition duration-150 ${
              activeFilter === 'Completed'
                ? 'bg-green-600 border-green-600 text-white shadow-sm'
                : 'bg-green-50/70 border-green-100 text-green-700 hover:bg-green-100/80'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Right Side: Month navigators */}
        <div className="flex items-center gap-3 justify-between sm:justify-end shrink-0">
          <button
            type="button"
            onClick={handleToday}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Today
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrevMonth}
              aria-label="Previous month"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 font-bold"
            >
              ‹
            </button>
            <span className="min-w-[90px] text-center text-xs font-extrabold text-slate-800">
              {monthNames[month]} {year}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              aria-label="Next month"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 font-bold"
            >
              ›
            </button>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Filters ⛛
          </button>
        </div>
      </div>

      {/* Monthly Grid Grid */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Days of Week Headers */}
        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50 text-center text-[10px] font-extrabold tracking-wider text-slate-400">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div key={day} className="py-3">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 bg-slate-100">
          {gridDays.map(({ dateStr, dayNum, isCurrentMonth }, idx) => {
            const isSelected = selectedDate === dateStr;

            // Filter events on this specific day
            const dayEvents = events.filter((e) => {
              if (e.date !== dateStr) return false;
              if (activeFilter !== 'all' && e.status !== activeFilter) return false;
              return true;
            });

            return (
              <button
                key={`${dateStr}-${idx}`}
                type="button"
                onClick={() => onSelectDate(dateStr)}
                className={`relative flex h-[98px] flex-col items-start p-2 text-left transition focus:outline-none ${
                  isCurrentMonth ? 'bg-white' : 'bg-slate-50/60 text-slate-300'
                } ${
                  isSelected 
                    ? 'ring-2 ring-inset ring-violet-500 bg-violet-50/10 z-10' 
                    : 'hover:bg-slate-50/30'
                }`}
              >
                {/* Day label */}
                <span
                  className={`flex h-5 w-5 items-center justify-center text-[10px] font-bold rounded-full ${
                    isSelected
                      ? 'bg-violet-600 text-white font-extrabold'
                      : isCurrentMonth
                      ? 'text-slate-700'
                      : 'text-slate-300'
                  }`}
                >
                  {dayNum}
                </span>

                {/* Events list in the Cell */}
                <div className="mt-1.5 w-full flex-1 space-y-1 overflow-hidden">
                  {dayEvents.map((evt) => {
                    let textCol = 'text-purple-700';
                    let bgCol = 'bg-purple-50';
                    if (evt.status === 'Saved') {
                      textCol = 'text-blue-700';
                      bgCol = 'bg-blue-50';
                    } else if (evt.status === 'Waitlisted') {
                      textCol = 'text-orange-700';
                      bgCol = 'bg-orange-50';
                    } else if (evt.status === 'Completed') {
                      textCol = 'text-green-700';
                      bgCol = 'bg-green-50';
                    }

                    return (
                      <div
                        key={evt.id}
                        className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-bold truncate w-full ${bgCol} ${textCol}`}
                      >
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColorClasses[evt.status]}`} />
                        <span className="truncate flex-1">{evt.title}</span>
                      </div>
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
