import React, { useState } from "react";
import { FormValues } from "../interface";
import InputField from "../component/FieldInput";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { username: "", password: "" };

    if (!formValues.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    navigate('/otp')

    // Simulate API request (you can replace this with actual API logic)
    if (formValues.username === "admin" && formValues.password === "password") {
      setSuccessMessage("Login successful!");
      setErrorMessage(null); // Clear any error messages
    } else {
      setErrorMessage("Invalid username or password");
      setSuccessMessage(null); // Clear any success messages
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Display success or error message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        {/* Use the InputField component for username with additional props */}
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          errorMessage={errors.username}
          maxLength={20} // Set the max length for username
          placeholder="Enter your username"
          variant="primary" // Optional variant
        />
        
        {/* Use the InputField component for password with additional props */}
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          errorMessage={errors.password}
          maxLength={20} // Set the max length for password
          placeholder="Enter your password"
          inputMode="text" // Use text for password field input
          variant="primary" // Optional variant
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
