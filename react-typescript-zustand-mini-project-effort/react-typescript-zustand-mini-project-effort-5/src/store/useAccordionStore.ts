import { create } from "zustand";
import { AccordionState } from "../interface";

const useAccordionStore = create<AccordionState>((set) => ({
    openIndex:null,
    toggleAccordion:(index) => set((state) => ({
        openIndex:state.openIndex === index ? null : index
    }))
}))

export default useAccordionStore;