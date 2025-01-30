export interface BannerType {
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface topNavType{
    pathurl:string;
    label:string;
}

export interface Post{
    id:number;
    title:string;
    body:string;
}

export interface AccordionState {
    openSection:string | null;
    toggleSection:(sectionId:string) => void;
}

export interface AccordionSectionType{
    sectionId:string;
    title:string;
    children:React.ReactNode
}

export interface CarouselType{
    currentIndex: number;
    images: string[];
    isAutoplay: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    toggleAutoplay: () => void;
    setImages: (images: string[]) => void;
    setCurrentIndex: (index: number) => void;
}

export interface AnimationStore {
    isHovered: boolean;
    toggleHover: () => void;
    resetHover: () => void;
  }

  export interface SearchStore {
    isSearchExpanded: boolean;
    toggleSearch: () => void;
    setSearchExpanded: (state: boolean) => void;
  }

  export interface ToggleState {
    isOn: boolean;
    toggle: () => void;
  }