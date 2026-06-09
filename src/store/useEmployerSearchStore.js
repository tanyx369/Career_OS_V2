import { create } from 'zustand';
import { employerTalentWorkspace } from '../data/mockData';

export const useEmployerSearchStore = create((set) => ({
  searchQuery: '',
  recentSearches: ['SQL', 'Python', 'Product Analyst'],
  chipsByPage: {
    talent: [],
    insights: [],
    engagement: [],
  },
  shortlistedIds: new Set(
    employerTalentWorkspace.candidates.filter(c => c.shortlisted).map(c => c.id)
  ),
  savedIds: new Set(
    employerTalentWorkspace.candidates.filter(c => c.shortlisted).map(c => c.id)
  ),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addChip: (page, chip) => set((state) => {
    const pageChips = state.chipsByPage[page];
    // Avoid duplicates of same type and value
    const exists = pageChips.some(c => c.type === chip.type && c.value.toLowerCase() === chip.value.toLowerCase());
    if (exists) return {};
    
    const newChip = { ...chip, id: `${chip.type}-${Date.now()}` };
    return {
      chipsByPage: {
        ...state.chipsByPage,
        [page]: [...pageChips, newChip]
      }
    };
  }),
  removeChip: (page, id) => set((state) => ({
    chipsByPage: {
      ...state.chipsByPage,
      [page]: state.chipsByPage[page].filter(c => c.id !== id)
    }
  })),
  clearChips: (page) => set((state) => ({
    chipsByPage: {
      ...state.chipsByPage,
      [page]: []
    }
  })),
  addRecentSearch: (query) => set((state) => {
    if (!query.trim()) return {};
    const filtered = state.recentSearches.filter(q => q.toLowerCase() !== query.toLowerCase());
    return {
      recentSearches: [query, ...filtered].slice(0, 5)
    };
  }),
  clearRecentSearches: () => set({ recentSearches: [] }),
  toggleShortlist: (candidateId) => set((state) => {
    const nextShort = new Set(state.shortlistedIds);
    const nextSaved = new Set(state.savedIds);
    if (nextShort.has(candidateId)) {
      nextShort.delete(candidateId);
    } else {
      nextShort.add(candidateId);
      nextSaved.add(candidateId); // Automatically save when shortlisting
    }
    return { shortlistedIds: nextShort, savedIds: nextSaved };
  }),
  toggleSave: (candidateId) => set((state) => {
    const nextSaved = new Set(state.savedIds);
    if (nextSaved.has(candidateId)) {
      nextSaved.delete(candidateId);
    } else {
      nextSaved.add(candidateId);
    }
    return { savedIds: nextSaved };
  }),
}));

