export interface NavItem{
    name: string;
  path: string;
}

export interface BannerProps{
  title:string;
  desc:string;
  bannerStyle:React.CSSProperties;
}

 // Define the interface for the FieldInput component props
export interface FieldInputProps {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'file'; // Type of the input field
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input change
  placeholder?: string; // Optional placeholder text
  error?: string; // Optional error message
  maxlength?: number; // Optional maximum length for the input field
  disabled?: boolean; // Optional disabled state for the input field
  variant?: 'outlined' | 'filled'; // Optional variant for styling
}