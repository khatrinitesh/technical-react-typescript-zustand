import { create } from "zustand";
import { AccordionState } from "../types";

export const useAccordionStore = create<AccordionState>((set) => ({
    openIndex:null,
    toggleItem:(index) => set((state) => ({ openIndex:state.openIndex === index ? null : index }))
}))