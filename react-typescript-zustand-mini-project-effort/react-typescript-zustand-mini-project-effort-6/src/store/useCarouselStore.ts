import { create } from "zustand";
import { CarouselType } from "../interface";

export const useCarouselStore = create<CarouselType>((set) => ({
  currentIndex: 0,
  images: [],
  isAutoplay: false,
  nextSlide: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.images.length,
    })),
  prevSlide: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + state.images.length) % state.images.length,
    })),
  toggleAutoplay: () => set((state) => ({ isAutoplay: !state.isAutoplay })),
  setImages: (images: string[]) => set({ images }),
  setCurrentIndex: (index: number) => set({ currentIndex: index }),
}));
