import { create } from "zustand";

export const useAlertStore = create<AlertState>((set) => ({
    message:null,
    showAlert:(message:string) => set({message}),
    clearAlert:() => set({message:null})
}))
