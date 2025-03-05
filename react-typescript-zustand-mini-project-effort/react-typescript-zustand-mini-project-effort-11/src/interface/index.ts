export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface ServiceProps{
    id:number;
    title:string;
    body:string;
}

export interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    maxLength?: number;
    placeholder?: string;
    inputMode?: "text" | "numeric" | "tel" | "email" | "none";
    variant?: "primary" | "secondary"; // Custom variant for styling
  }

  export interface FormValues {
    username: string;
    password: string;
  }
  