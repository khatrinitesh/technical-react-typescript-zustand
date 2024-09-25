// alert
export interface AlertProps{
    label:string;
    alertMsg:string;
}
export interface AlertState {
    message:string | null;
    showAlert:(message:string) => void;
    clearAlert:() => void;
}

// accordion
export interface AccordionItem{
    title:string;
    content:string;
}

export interface AccordionProps{
    items:AccordionItem[];
}

export interface AccordionState {
    openIndex:number | null; 
    toggleItem:(index:number) => void;
}

// animate icons
export interface IconState {
    animatedIcons:number[];
    toggleIcon:(index:number)=> void;
}

export interface IconProps{
    index:number;
    icon:string;
}

// animated buttons
export interface ButtonState{
    isHovered:boolean;
    setHovered:(hovered:boolean) => void;
}

export interface SearchState{
    searchTerm:string;
    setSearchTerm:(term:string) => void;
}

export interface BoxState{
    isHovered:boolean;
    toggleHover:() => void;
}

export interface AspectRatioState{
    aspectRatio:number;
    setAspectRatio:(ratio:number) => void;
}

export interface AutoCompleteState{
    inputValue:string;
    setInputValue:(value:string) => void;
    suggestions:string[];
    setSuggestions:(suggestions:string[])=> void;
}

export interface AvatarImages{
    avatarUrl:string;
    setAvatarUrl:(url:string) => void;
}

export interface BlackWhiteImage{
    imageUrl:string;
    setImageUrl:(url:string)=> void;

}

export interface BigHeaderState{
    title:string;
    setTitle:(title:string) => void;
}

export interface BlockButtonsState{
    isBlocked:boolean;
    toggleBlock() => void;
}

export interface BlogPostProps{
    id:number;
    title:string;
    content:string;
}

export interface BlogStore{
    posts:BlogPostProps[];
    addPost:(post:BlogPost) => void;
    removePost:(id:number) => void;
}

export interface BlurBackgroundImageStore{
    isBlurred:boolean;
    toggleBlur:() => void;
}

export interface TourProps{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    numberOfTours: number;
}

export interface Destination {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    numberOfTours: number;
  }
  
  export interface DestinationStore {
    destinations: Destination[];
    addDestination: (destination: Destination) => void;
  }
  
  export interface DestinationCardProps {
    title: string;
    description: string;
    imageUrl: string;
    numberOfTours: number;
    onLearnMore: () => void;
  }