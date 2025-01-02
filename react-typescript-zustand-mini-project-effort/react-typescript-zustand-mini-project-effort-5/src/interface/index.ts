export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface PostProps{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface PostState{
    post:PostProps[];
    fetchPosts:() => void;
    isLoading:boolean;
    isError:string | null;
    deletePost:(id:number) => string;
}

export interface HeaderProps{
    title:string;
    url:string;
}

export interface AccordionItem{
    title:string;
    content:string;
}

export interface AccordionProps{
    items:AccordionItem[]
}

export interface AccordionState{
    openIndex:number | null;
    toggleAccordion:(index:number) => void;
}

export interface AlertState{
    isOpen:boolean;
    message:string;
    openAlert:(message:string) => void;
    closeAlert:() => void;
}


export interface CheckboxState{
    checked:boolean;
    toggleCheckbox:() => void;
}