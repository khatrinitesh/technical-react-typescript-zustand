import { create } from "zustand";
import { AvatarImages } from './../types/index.d';

export const useBlackWhiteImgStore = create<BlackWhiteImage>((set) => ({
    imageUrl:'',
    setImageUrl:(url) => set({imageUrl:url}),
}))