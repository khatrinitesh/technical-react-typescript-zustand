export interface BannerState{
    children:React.ReactNode;
    bannerStyle:React.CSSProperties;
}

export interface User{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}

export interface UsersResponse{
    data:User[];
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
}