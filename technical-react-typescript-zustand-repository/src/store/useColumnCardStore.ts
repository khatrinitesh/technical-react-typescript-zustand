
import { create } from 'zustand';
import { TourStore } from './../types';

export const useDestinationStore = create<DestinationStore>((set) => ({
    destinations: [],
    addDestination: (destination) => set((state) => ({ destinations: [...state.destinations, destination] })),
  }));