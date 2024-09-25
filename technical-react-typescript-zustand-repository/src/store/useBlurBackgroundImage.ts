import { create } from "zustand";

export const useBlurBackgroundImageStore = create<BlurBackgroundImageStore>((set) => ({
    isBlurred:false,
    toggleBlur:() => set((state) => ({isBlurred:!state.isBlurred}))
}))