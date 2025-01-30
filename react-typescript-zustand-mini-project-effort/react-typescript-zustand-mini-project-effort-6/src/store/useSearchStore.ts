import { create } from "zustand";
import { SearchStore } from "../interface";

export const useSearchStore = create<SearchStore>((set) => ({
    isSearchExpanded: false,
    toggleSearch: () => set((state) => ({ isSearchExpanded: !state.isSearchExpanded })),
    setSearchExpanded: (state: boolean) => set({ isSearchExpanded: state }),
  }));