import React, { useRef, useState } from 'react';
import FieldInput from '../components/FieldInput';
import { toast } from 'sonner'; // Import Sonner for toast notifications

const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill('')); // 4 OTP fields
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Store refs for each input field

  // Handle change in each OTP input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Allow only one character (digit) in each field
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move focus to the next input field if the user enters a digit
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle OTP form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');

    // Check if all OTP fields are filled
    if (otpString.length === otp.length) {
      toast.success('OTP Submitted successfully!');
      // Handle OTP submission logic, like verifying OTP
    } else {
      toast.error('Please fill in all OTP fields!');
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <div className="otp-inputs flex gap-[10px]">
          {/* Render 4 OTP input fields */}
          {otp.map((_, index) => (
            <FieldInput
              key={index}
              name={`otp-${index}`}
              type="text"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              maxlength={1} // Only 1 character per field
              variant="outlined"
              disabled={false}
              placeholder="0"
              ref={(el) => inputRefs.current[index] = el} // Set ref for auto-focus
            />
          ))}
        </div>
        <button type="submit">Submit OTP</button>
      </form>
    </div>
  );
};

export default Otp;
