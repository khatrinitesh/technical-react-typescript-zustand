import { create } from "zustand";

export const useAnimationStore = create((set) => ({
    isHovered:false,
    toggleHover:() => set((state) => ({isHovered:!state.isHovered}))
}))