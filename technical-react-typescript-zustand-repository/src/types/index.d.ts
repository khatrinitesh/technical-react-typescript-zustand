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