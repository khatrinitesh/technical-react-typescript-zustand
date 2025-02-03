import React from 'react';
import { FieldInputProps } from '../interface';

const FieldInput: React.FC<FieldInputProps> = ({
  id,
  name,
  type,
  placeholder = '',
  maxwidth = '100%',
  disabled = false,
  autoFocus = false,
  value,
  onChange,
  className = '',
  variant = 'default', // Default variant is 'default'
  isValid, // Destructure the validation prop
  error, // Error message
}) => {
  // Base styles for the input component
  const baseStyles = 'p-2 rounded border';
  const variantStyles = {
    default: 'border-gray-300',
    outlined: 'border-2 border-blue-500 bg-transparent',
    filled: 'bg-gray-100',
  };
  
  // Additional error styles
  const errorStyles = 'border-red-500 text-red-500';

  const inputStyles = `${baseStyles} ${variantStyles[variant]} ${className} ${
    error ? errorStyles : ''
  }`;

  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        className={inputStyles}
        style={{ width: '100%' }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default FieldInput;
