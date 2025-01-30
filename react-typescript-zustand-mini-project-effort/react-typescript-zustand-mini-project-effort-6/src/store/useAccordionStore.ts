import { create } from "zustand";
import { AccordionState } from "../interface";

export const useAccordionStore = create<AccordionState>((set) => ({
    openSection:null,
    toggleSection:(sectionId) => set((state) => ({
        openSection:state.openSection === sectionId ? null : sectionId
    }))
}))