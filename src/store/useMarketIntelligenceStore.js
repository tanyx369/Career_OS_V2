import { create } from 'zustand';
import { MarketDataService } from '../services/MarketDataService';

export const useMarketIntelligenceStore = create((set, get) => ({
  selectedCountry: 'Malaysia',
  selectedTimeframe: 'Past 12 Months',
  isLoading: false,
  marketData: MarketDataService.getMarketStanding('Malaysia', 'Past 12 Months'),
  
  setCountry: (country) => {
    const currentCountry = get().selectedCountry;
    if (country === currentCountry) return;

    set({ isLoading: true, selectedCountry: country });
    
    // Recalculate market data immediately
    const nextData = MarketDataService.getMarketStanding(country, get().selectedTimeframe);
    set({ marketData: nextData });

    // Transition loaders smoothly with 600ms timeout
    setTimeout(() => {
      set({ isLoading: false });
    }, 600);
  },

  setTimeframe: (timeframe) => {
    const currentTimeframe = get().selectedTimeframe;
    if (timeframe === currentTimeframe) return;

    set({ isLoading: true, selectedTimeframe: timeframe });
    
    const nextData = MarketDataService.getMarketStanding(get().selectedCountry, timeframe);
    set({ marketData: nextData });

    setTimeout(() => {
      set({ isLoading: false });
    }, 600);
  },
}));
