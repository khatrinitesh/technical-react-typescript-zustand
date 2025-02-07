import React, { forwardRef } from 'react';
import { FieldInputProps } from '../interface';
import './FieldInput.css';

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(({
  label,
  name,
  type = 'text', 
  value,
  onChange,
  placeholder,
  error,
  maxlength,
  disabled = false,
  variant = 'outlined', 
}, ref) => {
  return (
    <div className={`field-input ${variant}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        maxLength={maxlength}
        disabled={disabled}
        aria-describedby={error ? `${name}-error` : undefined}
        ref={ref} // Pass the ref to the input element for auto-focus
      />
      {error && <span id={`${name}-error`} className="error">{error}</span>}
    </div>
  );
});

export default FieldInput;