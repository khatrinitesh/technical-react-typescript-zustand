import { create } from "zustand";
import { AutoCompleteState } from "../types";

export const useAutocompleteStore = create<AutoCompleteState>((set) => ({
    inputValue: '',
    setInputValue: (value) => set({ inputValue:value }),
    suggestions:[],
    setSuggestions:(suggestions) => set({suggestions}),
}))