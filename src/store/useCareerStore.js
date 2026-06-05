import { create } from 'zustand'
import { initialExperiences, mockUser } from '../data/mockData'

const sessionStorageKey = 'careeros-session'

// Role selection is persisted so refreshing the demo keeps the current workspace.
function readSavedSession() {
  if (typeof window === 'undefined') {
    return { selectedRole: null, isAuthenticated: false, currentWorkspace: null }
  }

  try {
    const saved = window.localStorage.getItem(sessionStorageKey)
    return saved ? JSON.parse(saved) : { selectedRole: null, isAuthenticated: false, currentWorkspace: null }
  } catch {
    return { selectedRole: null, isAuthenticated: false, currentWorkspace: null }
  }
}

function saveSession(session) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(sessionStorageKey, JSON.stringify(session))
}

function clearSession() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(sessionStorageKey)
}

const savedSession = readSavedSession()

export const useCareerStore = create((set) => ({
  // This store holds lightweight demo state only: session role and experiences.
  currentUser: mockUser,
  selectedRole: savedSession.selectedRole,
  isAuthenticated: savedSession.isAuthenticated,
  currentWorkspace: savedSession.currentWorkspace,
  selectRole: (role) => {
    const session = {
      selectedRole: role,
      isAuthenticated: true,
      currentWorkspace: role,
    }
    saveSession(session)
    set(session)
  },
  signOut: () => {
    clearSession()
    set({
      selectedRole: null,
      isAuthenticated: false,
      currentWorkspace: null,
    })
  },
  experiences: initialExperiences,
  addExperience: (experience) =>
    set((state) => ({
      experiences: [{ id: `exp-${Date.now()}`, ...experience }, ...state.experiences],
    })),

  // Calendar State & Actions
  myEvents: [
    {
      id: 'evt-up-1',
      title: 'Build with AI Community Day',
      status: 'Registered',
      date: '2025-05-17',
      matchPercent: 93,
      time: '9:00 AM - 5:00 PM',
      location: 'Online',
      org: 'Google Developer Student Clubs',
      skills: ['AI & Data', 'Web Dev', 'Cloud', 'Machine Learning'],
      deadline: '2025-05-15',
      category: 'hackathons'
    },
    {
      id: 'evt-up-2',
      title: 'McKinsey Forward Case Challenge',
      status: 'Registered',
      date: '2025-05-20',
      matchPercent: 98,
      time: '8:30 AM - 6:00 PM',
      location: 'Kuala Lumpur',
      org: 'McKinsey & Company',
      skills: ['Consulting', 'Strategy', 'Problem Solving', 'Leadership'],
      deadline: '2025-05-20',
      category: 'case-competitions'
    },
    {
      id: 'evt-up-3',
      title: 'Design Thinking Workshop',
      status: 'Saved',
      date: '2025-05-21',
      matchPercent: 87,
      time: '10:00 AM - 1:00 PM',
      location: 'Offline · Bangsar South',
      org: 'Design School',
      skills: ['UX', 'Design Thinking', 'Problem Solving', 'Data Analysis'],
      deadline: '2025-05-21',
      category: 'workshops'
    },
    {
      id: 'evt-up-4',
      title: 'Startup Pitch Night',
      status: 'Waitlisted',
      date: '2025-05-23',
      matchPercent: 76,
      time: '7:00 PM - 10:00 PM',
      location: 'Offline · Petaling Jaya',
      org: 'Entrepreneur Society',
      skills: ['Pitch & Presentation', 'Business', 'Public Speaking'],
      deadline: '2025-05-22',
      category: 'talks'
    },
    {
      id: 'evt-up-5',
      title: 'Cybersecurity Capture The Flag',
      status: 'Saved',
      date: '2025-05-24',
      matchPercent: 79,
      time: '12:00 PM - 6:00 PM',
      location: 'Online',
      org: 'CyberSec Club',
      skills: ['Cybersecurity', 'Network Security', 'Problem Solving'],
      deadline: '2025-05-23',
      category: 'hackathons'
    }
  ],
  addEventToCalendar: (event, status = 'Saved') => set((state) => {
    const exists = state.myEvents.some((e) => e.id === event.id);
    if (exists) {
      return {
        myEvents: state.myEvents.map((e) => e.id === event.id ? { ...e, status } : e)
      };
    }
    let formattedDate = event.date;
    if (formattedDate && !formattedDate.includes('-')) {
      const parts = formattedDate.split(' ');
      if (parts.length >= 2) {
        const day = parts[0].replace(/\D/g, '').padStart(2, '0');
        const monthMap = { jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06', jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12' };
        const monthStr = parts[1].toLowerCase().substring(0, 3);
        const month = monthMap[monthStr] || '05';
        const year = parts[2] || '2025';
        formattedDate = `${year}-${month}-${day}`;
      }
    }
    const newEvent = {
      id: event.id || `evt-${Date.now()}`,
      title: event.title || 'Untitled Event',
      status: status,
      date: formattedDate || '2025-05-17',
      matchPercent: event.matchPercent || event.matchScore || 80,
      time: event.time || '9:00 AM - 5:00 PM',
      location: event.location || 'Online',
      org: event.org || 'Google Developer Student Clubs',
      skills: event.skills || ['AI & Data', 'Problem Solving'],
      deadline: event.deadline || formattedDate || '2025-05-15',
      category: event.category || 'workshops'
    };
    return { myEvents: [...state.myEvents, newEvent] };
  }),
  updateEventStatus: (eventId, newStatus) => set((state) => ({
    myEvents: state.myEvents.map((e) => e.id === eventId ? { ...e, status: newStatus } : e)
  })),
  removeEventFromCalendar: (eventId) => set((state) => ({
    myEvents: state.myEvents.filter((e) => e.id !== eventId)
  })),
}))
