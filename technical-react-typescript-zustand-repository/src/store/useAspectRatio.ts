import { create } from "zustand";

export const useAspectRatio = create((set) => ({
    aspectRatio:16/9,
    setAspectRatio:(ratio) => set({aspectRatio:ratio}),
}))