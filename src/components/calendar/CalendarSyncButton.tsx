import React from 'react';
import { CalendarEvent } from './CalendarTypes';

interface CalendarSyncButtonProps {
  events: CalendarEvent[];
  activeEvent?: CalendarEvent | null;
  variant?: 'compact' | 'footer';
}

export default function CalendarSyncButton({ events, activeEvent, variant = 'compact' }: CalendarSyncButtonProps) {
  const getICSDateString = (dateStr: string, timeStr: string, isEnd: boolean = false) => {
    const cleanDate = dateStr.replace(/-/g, ''); // YYYYMMDD
    let hour = isEnd ? 17 : 9;
    let min = '00';

    if (timeStr) {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)\s*–\s*(\d+):(\d+)\s*(AM|PM)/i) || 
                    timeStr.match(/(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/i);
      if (match) {
        let startH = parseInt(match[1], 10);
        const startM = match[2];
        const startAmpm = match[3].toUpperCase();
        let endH = parseInt(match[4], 10);
        const endM = match[5];
        const endAmpm = match[6].toUpperCase();

        if (!isEnd) {
          if (startAmpm === 'PM' && startH < 12) startH += 12;
          if (startAmpm === 'AM' && startH === 12) startH = 0;
          hour = startH;
          min = startM;
        } else {
          if (endAmpm === 'PM' && endH < 12) endH += 12;
          if (endAmpm === 'AM' && endH === 12) endH = 0;
          hour = endH;
          min = endM;
        }
      }
    }

    return `${cleanDate}T${hour.toString().padStart(2, '0')}${min}00`;
  };

  const handleDownloadICS = () => {
    if (events.length === 0) {
      alert('No events to sync!');
      return;
    }

    let icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//CareerOS//Personal Career Calendar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH'
    ].join('\r\n') + '\r\n';

    events.forEach((event) => {
      const startStr = getICSDateString(event.date, event.time, false);
      const endStr = getICSDateString(event.date, event.time, true);
      const stampStr = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

      icsContent += [
        'BEGIN:VEVENT',
        `UID:${event.id}@careeros.com`,
        `DTSTAMP:${stampStr}`,
        `DTSTART:${startStr}`,
        `DTEND:${endStr}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:Status: ${event.status}\\nMatch Score: ${event.matchPercent}%\\nOrganizer: ${event.org}`,
        `LOCATION:${event.location}`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      ].join('\r\n') + '\r\n';
    });

    icsContent += 'END:VCALENDAR';

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my_career_calendar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleGoogleCalendarSync = () => {
    // If there is an active selected event, sync that specific event
    const event = activeEvent || events[0];
    if (!event) {
      alert('No events to sync!');
      return;
    }

    const startStr = getICSDateString(event.date, event.time, false);
    const endStr = getICSDateString(event.date, event.time, true);
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startStr}/${endStr}&details=${encodeURIComponent(`Status: ${event.status}\nMatch Score: ${event.matchPercent}%\nOrganizer: ${event.org}`)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
  };

  const handleOutlookCalendarSync = () => {
    const event = activeEvent || events[0];
    if (!event) {
      alert('No events to sync!');
      return;
    }

    const formatISO = (dateStr: string, timeStr: string, isEnd: boolean) => {
      const stamp = getICSDateString(dateStr, timeStr, isEnd);
      // Convert YYYYMMDDTHHMMSS to YYYY-MM-DDTHH:MM:SS
      const y = stamp.substring(0, 4);
      const m = stamp.substring(4, 6);
      const d = stamp.substring(6, 8);
      const h = stamp.substring(9, 11);
      const min = stamp.substring(11, 13);
      return `${y}-${m}-${d}T${h}:${min}:00`;
    };

    const startStr = formatISO(event.date, event.time, false);
    const endStr = formatISO(event.date, event.time, true);

    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(event.title)}&startdt=${startStr}&enddt=${endStr}&body=${encodeURIComponent(`Status: ${event.status}\nMatch Score: ${event.matchPercent}%\nOrganizer: ${event.org}`)}&location=${encodeURIComponent(event.location)}`;
    window.open(outlookUrl, '_blank');
  };

  if (variant === 'footer') {
    return (
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-violet-100 bg-violet-50/50 p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-700">
            📅
          </div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Sync your calendar</h4>
            <p className="text-xs text-slate-500">Export your events to stay on top of your schedule everywhere.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={handleGoogleCalendarSync}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="text-base">G</span> Google Calendar
          </button>
          <button
            type="button"
            onClick={handleOutlookCalendarSync}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="text-blue-500">O</span> Outlook Calendar
          </button>
          <button
            type="button"
            onClick={handleDownloadICS}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="text-slate-700">🍎</span> Apple Calendar
          </button>
          <button
            type="button"
            onClick={handleDownloadICS}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            📥 .ics File
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDownloadICS}
      className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span>🔄</span> Sync Calendar
    </button>
  );
}
