import React, { useState } from 'react';
import { toast } from 'sonner'; // Import Sonner for toast notifications
import FieldInput from '../components/FieldInput';
import { useNavigate } from 'react-router-dom';

const Register:React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        age: '',
        address: '',
      });
      const navigate = useNavigate();
    
      const [errors, setErrors] = useState({
        fullName: '',
        mobile: '',
        age: '',
        address: '',
      });
    
      // Handle form input change
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      // Handle form submission
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Reset errors
        let formErrors = { fullName: '', mobile: '', age: '', address: '' };
    
        // Validation
        if (!formData.fullName) {
          formErrors.fullName = 'Full Name is required';
        }
        if (!formData.mobile) {
          formErrors.mobile = 'Mobile number is required';
        }
        if (!formData.age) {
          formErrors.age = 'Age is required';
        }
        if (!formData.address) {
          formErrors.address = 'Address is required';
        }
    
        setErrors(formErrors);
    
        // If no errors, submit the form and show success toast
        if (!formErrors.fullName && !formErrors.mobile && !formErrors.age && !formErrors.address) {
          // Show success toast
          toast.success('Registration successful!');
          navigate('/otp')
    
          // Clear form fields after success
          setFormData({
            fullName: '',
            mobile: '',
            age: '',
            address: '',
          });
        } else {
          toast.error('Please fill in all fields!');
        }
      };
  return (
    <>
       <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Use FieldInput component for each form field */}
          <FieldInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="Enter your full name"
            maxlength={50}
            variant="outlined"
          />

          <FieldInput
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            placeholder="Enter your mobile number"
            maxlength={15}
            variant="outlined"
          />

          <FieldInput
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
            placeholder="Enter your age"
            maxlength={3}
            variant="outlined"
          />

          <FieldInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            placeholder="Enter your address"
            maxlength={100}
            variant="outlined"
          />

          <button type="submit">Submit</button>
        </form>
      </div>


    </>
  );
}

export default Register;
