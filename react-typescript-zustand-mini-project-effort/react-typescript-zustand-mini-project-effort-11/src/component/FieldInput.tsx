// InputField.tsx
import React from 'react';
import { InputFieldProps } from '../interface';


const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  errorMessage,
  maxLength,
  placeholder,
  inputMode = "text", // Default to "text"
  variant = "primary", // Default to "primary"
}) => {
  return (
    <div className={`input-group ${variant}`}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        inputMode={inputMode}
        className={errorMessage ? "input-error" : ""}
      />
      {errorMessage && <span className="error-text">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
