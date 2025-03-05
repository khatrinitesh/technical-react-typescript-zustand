import React, { useState } from "react";
import InputField from "../component/FieldInput";

const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState<string>("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const newOtp = [...otp];

    if (value.match(/[0-9]/)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move focus to next input field if it's not the last one
      if (index < 3 && value !== "") {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length !== 4 || otp.includes("")) {
      setError("Please enter a valid 4-digit OTP.");
    } else {
      setError(""); // Clear any previous errors
      alert(`OTP Submitted: ${otp.join("")}`);
    }
  };
  return (
    <>
      <div className="otp-container">
        <h2>Enter OTP</h2>

        {/* Display error message if any */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <InputField
                key={index}
                label={`OTP Digit ${index + 1}`}
                type="text"
                name={`otp-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                inputMode="numeric" // Ensures numeric keyboard appears on mobile
                variant="primary"
                placeholder="•" // Placeholder for each OTP input
              />
            ))}
          </div>

          <button type="submit">Verify OTP</button>
        </form>
      </div>
    </>
  );
};

export default Otp;
