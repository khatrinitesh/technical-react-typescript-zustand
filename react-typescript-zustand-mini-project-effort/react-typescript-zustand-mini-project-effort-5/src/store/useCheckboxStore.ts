import { create } from "zustand";
import { CheckboxState } from "../interface";


const useCheckboxStore = create<CheckboxState>((set) => ({
    checked:true,
    toggleCheckbox:() => set((state) => ({
        checked:!state.checked
    }))
}))

export default useCheckboxStore;