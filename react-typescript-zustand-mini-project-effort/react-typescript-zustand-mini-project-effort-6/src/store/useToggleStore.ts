import { create } from "zustand";
import { ToggleState } from "../interface";



export const useToggleStore = create<ToggleState>((set) => ({
    isOn: false,
    toggle: () => set((state) => ({ isOn: !state.isOn })),
  }));