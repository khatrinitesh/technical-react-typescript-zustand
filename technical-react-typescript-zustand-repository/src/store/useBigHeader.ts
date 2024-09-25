import { create } from "zustand";
import { BigHeaderState } from './../types/index.d';

export const useBigHeaderStore = create<BigHeaderState>((set) => ({
    title:'Welcome to My App',
    setTitle:(title) => set({title}),
}))