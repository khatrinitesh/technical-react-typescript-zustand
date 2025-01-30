import { create } from "zustand";
import { AnimationStore } from "../interface";

export const useAnimationStore = create<AnimationStore> ((set) => ({
    isHovered:false,
    toggleHover:() => set((state) => ({isHovered:!state.isHovered})),
    resetHover:() => set({isHovered:false})
}))