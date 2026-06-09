import React, { useEffect, useRef } from 'react';

export default function EventDrawer({
  isOpen,
  onClose,
  event,
  onUpdateStatus,
  onRemoveEvent,
  onViewEvent,
}) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first focusable element
    const focusable = drawerRef.current?.querySelectorAll(
      'button, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const statusColors = {
    Registered: 'bg-purple-100 text-purple-700 border-purple-200',
    Saved: 'bg-blue-100 text-blue-700 border-blue-200',
    Waitlisted: 'bg-amber-100 text-amber-700 border-amber-200',
    Completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-[1px]">
      {/* Click backdrop to close */}
      <div 
        className="absolute inset-0 cursor-default" 
        onClick={onClose} 
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Event Details"
        className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-slate-100 bg-white shadow-[-10px_0_30px_rgba(15,23,42,0.15)] animate-[slideIn_0.2s_ease-out]"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 className="text-base font-bold text-slate-900">Event Details</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div>
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${statusColors[event.status]}`}>
              {event.status}
            </span>
            <h2 className="mt-2.5 text-lg font-extrabold text-slate-950 leading-snug">{event.title}</h2>
            <p className="mt-1 text-sm font-semibold text-slate-400">🏢 {event.org}</p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 space-y-3.5">
            <div className="flex items-start gap-3">
              <span className="text-base">📅</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Date & Time</p>
                <p className="text-xs font-bold text-slate-700 mt-0.5">{event.date} · {event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">📍</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Location</p>
                <p className="text-xs font-bold text-slate-700 mt-0.5">{event.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">🎯</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Match Score</p>
                <p className="text-xs font-bold text-emerald-600 mt-0.5">{event.matchPercent}% Match</p>
              </div>
            </div>
          </div>

          {/* Skills developed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">Skills Developed</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {(event.skills && event.skills.length > 0 ? event.skills : ['Problem Solving', 'Data Analysis', 'Leadership', 'Public Speaking']).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action elements */}
          <div className="pt-4 space-y-3">
            <div>
              <label htmlFor="status-select" className="text-xs font-bold uppercase tracking-wide text-slate-400 block mb-1.5">
                Update Status
              </label>
              <select
                id="status-select"
                value={event.status}
                onChange={(e) => onUpdateStatus(event.id, e.target.value)}
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              >
                <option value="Registered">Registered</option>
                <option value="Saved">Saved</option>
                <option value="Waitlisted">Waitlisted</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="border-t border-slate-100 bg-slate-50/50 p-4 flex gap-2">
          <button
            type="button"
            onClick={() => onViewEvent(event)}
            className="flex-1 rounded-xl bg-violet-600 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-violet-700"
          >
            View Event
          </button>
          <button
            type="button"
            onClick={() => onRemoveEvent(event.id)}
            className="flex-1 rounded-xl border border-red-200 bg-white py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
          >
            Remove Event
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </div>
  );
}
