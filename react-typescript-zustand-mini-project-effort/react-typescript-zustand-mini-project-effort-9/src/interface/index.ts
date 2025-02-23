export interface BtnPrimaryState{
    onClick:() => void;
    children:React.ReactNode;
    btnStyle:React.CSSProperties;
}

export interface BannerState{
    children:React.ReactNode;
    bannerStyle:React.CSSProperties;
}