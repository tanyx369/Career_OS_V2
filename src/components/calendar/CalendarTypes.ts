export type CalendarEventStatus = 'Registered' | 'Saved' | 'Waitlisted' | 'Completed';

export interface CalendarEvent {
  id: string;
  title: string;
  status: CalendarEventStatus;
  date: string; // Format: YYYY-MM-DD
  matchPercent: number;
  time: string;
  location: string;
  org: string;
  skills: string[];
  deadline?: string; // Format: YYYY-MM-DD
  category?: string;
}
