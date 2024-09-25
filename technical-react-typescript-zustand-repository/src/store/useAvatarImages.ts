import { create } from "zustand";
import { AvatarImages } from './../types/index.d';

export const useAvatarImages = create<AvatarImages>((set) => ({
    avatarUrl:'',
    setAvatarUrl:(url) => set({avatarUrl:url}),
}))