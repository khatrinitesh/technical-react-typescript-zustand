import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import FieldInput from '../components/FieldInput';
import Preloader from '../components/Preloader';

const Login:React.FC = () => {
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // First validate the email
    if (!formData.email) {
      toast.error('Please fill in your email!'); // Show error if email is missing
    } else {
      toast.success('Email entered successfully!'); // Show success for email

      // After email validation, check for password
      setTimeout(() => {
        if (!formData.password) {
          toast.error('Please fill in your password!'); // Show error if password is missing
        } else {
          toast.success('Password entered successfully!'); // Show success for password

          // Now, simulate loading and proceed to next step
          setLoading(true);

          // Simulate loading process (3 seconds delay)
          setTimeout(() => {
            setFormData({
              email: '',
              password: '',
            });

            // Navigate to the register page or any other page after successful login
            navigate('/register'); // Update to your desired route

            // After the delay, set loading to false to hide the preloader
            setLoading(false);
          }, 3000); // 3 seconds to simulate the loading process
        }
      }, 1000); // Delay before showing password popup (for step-wise flow)
    }
  };



  return (
    <>
    {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <FieldInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              maxlength={50}
              variant="filled"
            />
            <FieldInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              maxlength={20}
              disabled={false}
              variant="outlined"
            />
            <button type="submit">Submit</button>
          </form>
          <Link to="/register" style={{ color: 'red' }}>Create an Account</Link>
        </div>
      )}
    
    </>
  );
}

export default Login;
