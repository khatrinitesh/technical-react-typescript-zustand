import { create } from "zustand";

export const useIconStore = create<IconState>((set) => ({
    animatedIcons:[],
    toggleIcon:(index) => set((state) => {
        const isActive = state.animatedIcons.includes(index);
        return {
            animatedIcons:isActive ? state.animatedIcons.filter((i) => i !== index) : [...state.animatedIcons,index],
        }
    })
}))