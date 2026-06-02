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
}))
