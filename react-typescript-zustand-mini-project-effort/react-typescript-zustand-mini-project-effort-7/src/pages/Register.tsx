import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Reset errors
    setFirstNameError('');
    setLastNameError('');
    setMobileNumberError('');

    // Validation
    let isValid = true;

    if (firstName.trim() === '') {
      setFirstNameError('First Name is required');
      isValid = false;
    }

    if (lastName.trim() === '') {
      setLastNameError('Last Name is required');
      isValid = false;
    }

    // Mobile number validation (basic example)
    const phonePattern = /^[0-9]{10}$/;  // Basic 10-digit phone number validation
    if (!phonePattern.test(mobileNumber.trim())) {
      setMobileNumberError('Please enter a valid 10-digit mobile number');
      isValid = false;
    }

    if (isValid) {
      // Submit form data or perform necessary actions
      console.log('Form Submitted');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Mobile Number:', mobileNumber);

      // Navigate to another page (optional)
      navigate('/success'); // Replace with the correct page
    }
  };

  // Handle only numeric input for mobile number
  const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and update the mobile number state
    const value = e.target.value.replace(/[^0-9]/g, ''); // Replace any non-numeric characters
    setMobileNumber(value);
  };

  return (
    <div className="registerContainer">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
          {firstNameError && <p className="error">{firstNameError}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </div>

        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileInput} // Handle numeric input
            placeholder="Enter your mobile number"
            inputMode="numeric" // For mobile devices, opens numeric keypad
            maxLength={10} // Limit to 10 digits
          />
          {mobileNumberError && <p className="error">{mobileNumberError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
