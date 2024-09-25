import { create } from "zustand";
import { BlockButtonsState } from "../types";

export const useBlockButtonStore = create<BlockButtonsState>((set) => ({
    isBlocked:true,
    toggleBlock:() => set((state) => ({isBlocked:!state.isBlocked}))
}))