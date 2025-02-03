export interface headTitleType{
    children:React.ReactNode;
    headTitleStyle:React.CSSProperties;
}

export interface FieldInputProps {
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    maxwidth?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;  // Optional className for custom styling
    variant?: 'default' | 'outlined' | 'filled';  // Different variants for styling
    isValid: boolean;  // Add a validation prop
  }