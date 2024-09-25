import { create } from "zustand";

export const useButtonstore = create((set)  => ({
    isHovered:false,
    setHovered:(hovered) => set({isHovered:hovered}),
}))