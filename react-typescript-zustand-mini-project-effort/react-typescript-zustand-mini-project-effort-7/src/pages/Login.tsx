import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import FieldInput from "../components/FieldInput"; // Import FieldInput component
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Ensure navigate is being used

  // handleSubmit function for the form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Reset errors
    setUsernameError('');
    setPasswordError('');

    // Validate the inputs
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Simulate login validation (e.g., check if username and password are correct)
      if (username === 'admin' && password === 'password123') {
        toast.success('Login successful!');
        // Redirect to the Register page after successful login
        console.log('Navigating to Register page...');
        navigate('/register'); // This should work if your routes are set up correctly
      } else {
        toast.error('Login failed! Please check your username and password.');
      }
    }
  };

  return (
    <>
      <div className="loginContainer">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <FieldInput
              id="username"
              name="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              error={usernameError}
            />
          </div>
          <div>
            <FieldInput
              id="password"
              name="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              error={passwordError}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
