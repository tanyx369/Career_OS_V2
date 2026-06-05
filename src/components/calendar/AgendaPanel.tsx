import React, { useMemo } from 'react';
import { CalendarEvent } from './CalendarTypes';

interface AgendaPanelProps {
  selectedDate: string; // YYYY-MM-DD
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
  onRemoveEvent: (eventId: string) => void;
  onSelectDate: (date: string) => void;
}

export default function AgendaPanel({
  selectedDate,
  events,
  onSelectEvent,
  onRemoveEvent,
  onSelectDate,
}: AgendaPanelProps) {
  const headerDateString = useMemo(() => {
    try {
      const d = new Date(selectedDate);
      if (isNaN(d.getTime())) return selectedDate;
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    } catch {
      return selectedDate;
    }
  }, [selectedDate]);

  const dailyEvents = useMemo(() => {
    return events.filter((e) => e.date === selectedDate);
  }, [events, selectedDate]);

  // Other upcoming events sorted by date
  const otherUpcomingEvents = useMemo(() => {
    return events
      .filter((e) => e.date !== selectedDate)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, selectedDate]);

  const statusColors = {
    Registered: 'bg-purple-100 text-purple-700 border-purple-200',
    Saved: 'bg-blue-100 text-blue-700 border-blue-200',
    Waitlisted: 'bg-amber-100 text-amber-700 border-amber-200',
    Completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  const statusBorderColors = {
    Registered: 'border-purple-600',
    Saved: 'border-blue-600',
    Waitlisted: 'border-orange-500',
    Completed: 'border-green-600',
  };

  const indicatorBarColors = {
    Registered: 'bg-purple-600',
    Saved: 'bg-blue-600',
    Waitlisted: 'bg-orange-500',
    Completed: 'bg-green-600',
  };

  const monthShorts: Record<string, string> = {
    '01': 'JAN', '02': 'FEB', '03': 'MAR', '04': 'APR', '05': 'MAY', '06': 'JUN',
    '07': 'JUL', '08': 'AUG', '09': 'SEP', '10': 'OCT', '11': 'NOV', '12': 'DEC'
  };

  const renderTimeBlock = (timeStr: string) => {
    if (!timeStr) return <div className="text-[10px] text-slate-400">All Day</div>;
    // Split "9:00 AM - 5:00 PM"
    const parts = timeStr.split(/\s*-\s*|\s*–\s*/);
    if (parts.length >= 2) {
      return (
        <div className="flex flex-col items-center justify-center text-center shrink-0 border-r border-slate-100 pr-3 min-w-[70px]">
          <span className="text-[10px] font-extrabold text-slate-800">{parts[0].trim()}</span>
          <span className="h-4 w-px bg-slate-200 my-0.5" />
          <span className="text-[10px] font-extrabold text-slate-800">{parts[1].trim()}</span>
        </div>
      );
    }
    return <div className="text-[10px] font-bold text-slate-700 border-r border-slate-100 pr-3">{timeStr}</div>;
  };

  return (
    <div className="flex h-full flex-col border border-slate-200/80 bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(15,23,42,0.02)] lg:p-5">
      {/* Date Header */}
      <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
        <h4 className="text-xs font-extrabold text-slate-900 tracking-tight">{headerDateString}</h4>
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-bold text-violet-700">
          {dailyEvents.length} {dailyEvents.length === 1 ? 'event' : 'events'}
        </span>
      </div>

      {/* Daily Events Cards */}
      <div className="flex-1 overflow-y-auto pt-4 space-y-4 max-h-[300px] lg:max-h-none">
        {dailyEvents.length > 0 ? (
          dailyEvents.map((event) => (
            <div
              key={event.id}
              className="flex overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Left Colored Bar */}
              <div className={`w-1.5 shrink-0 ${indicatorBarColors[event.status]}`} />
              
              <div className="flex-1 p-3.5 space-y-3.5">
                <div className="flex items-start gap-3">
                  {/* Left Block: Time Divider */}
                  {renderTimeBlock(event.time)}

                  {/* Right Block: Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[8px] font-extrabold ${statusColors[event.status]}`}>
                        {event.status}
                      </span>
                      {event.matchPercent && (
                        <span className="text-[9px] font-extrabold text-emerald-600">
                          {event.matchPercent}% Match
                        </span>
                      )}
                    </div>
                    <h5 className="text-xs font-extrabold text-slate-950 leading-snug mt-1">{event.title}</h5>
                    <p className="mt-0.5 text-[10px] font-semibold text-slate-400 truncate">Google Developer Student Clubs</p>
                    <p className="text-[10px] font-semibold text-slate-400 truncate mt-0.5">📍 {event.location}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectEvent(event)}
                    className="flex-1 rounded-lg border border-violet-200 bg-white py-1.5 text-[10px] font-extrabold text-violet-600 transition hover:bg-violet-50"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveEvent(event.id)}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-extrabold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Remove from Calendar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center text-slate-400">
            <span className="text-3xl">☕</span>
            <p className="mt-2 text-xs font-bold">No events scheduled today.</p>
          </div>
        )}
      </div>

      {/* Other Upcoming Events list */}
      <div className="border-t border-slate-100 pt-4 mt-4 shrink-0">
        <h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-3">Other Upcoming</h5>
        <div className="max-h-[170px] overflow-y-auto space-y-2.5 pr-1">
          {otherUpcomingEvents.length > 0 ? (
            otherUpcomingEvents.slice(0, 4).map((event) => {
              const dateObj = new Date(event.date);
              const dayStr = dateObj.getDate().toString();
              const monthIndex = (dateObj.getMonth() + 1).toString().padStart(2, '0');
              const monthStr = monthShorts[monthIndex] || 'MAY';

              const badgeColors = {
                Registered: 'bg-purple-100 text-purple-700 border-purple-100',
                Saved: 'bg-slate-100 text-slate-600 border-slate-100',
                Waitlisted: 'bg-amber-100 text-amber-700 border-amber-100',
                Completed: 'bg-emerald-100 text-emerald-700 border-emerald-100',
              };

              let textCol = 'text-purple-600';
              if (event.status === 'Saved') textCol = 'text-blue-600';
              else if (event.status === 'Waitlisted') textCol = 'text-orange-500';
              else if (event.status === 'Completed') textCol = 'text-green-600';

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onSelectDate(event.date)}
                  className="flex w-full items-center gap-3 rounded-xl border border-transparent p-1.5 text-left transition hover:border-violet-100 hover:bg-violet-50/10 focus:outline-none"
                >
                  {/* Calendar sheet icon on left */}
                  <div className="flex h-9 w-9 shrink-0 flex-col overflow-hidden rounded border border-slate-200 text-center">
                    <div className="bg-slate-100 text-[6px] font-extrabold text-slate-500 py-0.5 uppercase leading-none border-b border-slate-100">
                      {monthStr}
                    </div>
                    <div className="bg-white text-xs font-extrabold text-slate-800 flex-1 flex items-center justify-center leading-none">
                      {dayStr}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-[11px] font-bold text-slate-900 leading-snug">{event.title}</p>
                    </div>
                    <p className="text-[9px] text-slate-400 truncate mt-0.5">
                      {event.location} · {event.time}
                    </p>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[8px] font-extrabold shrink-0 ${badgeColors[event.status]}`}>
                    {event.status}
                  </span>
                </button>
              );
            })
          ) : (
            <p className="text-[10px] font-semibold text-slate-400 text-center py-2">No other events.</p>
          )}
        </div>
      </div>
    </div>
  );
}
