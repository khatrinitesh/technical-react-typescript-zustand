import { create } from "zustand";
import { AlertState } from "../interface";

const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    message: '',
    openAlert: (message) => set({ isOpen: true, message }),
    closeAlert: () => set({ isOpen: false, message: '' }),
}))

export default useAlertStore;