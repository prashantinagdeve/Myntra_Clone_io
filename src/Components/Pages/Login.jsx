import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");


  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate()
  



  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOtpSent) {
      // Simulate OTP generation and sending
      const generatedOtp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
      console.log("OTP generated:", generatedOtp);

      // Here, you would typically make an API call to send the OTP to the entered mobile number
      console.log("OTP sent to:", mobileNumber);

      setIsOtpSent(true); // Update state to indicate OTP is sent
    } else {
      // Handle OTP verification logic here
      console.log("Submitted OTP:", otp);
      // After successful OTP verification, you can proceed with login
      console.log("User logged in successfully!");
      navigate('/')
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-rose-100">
      
      <div className="md:w-1/3 max-w-sm h-96">
        <div className="text-center font-bold text-xl ">
          <label className="mr-1">Sign in with</label>
          
          
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {isOtpSent ? (
            <input
              className="mt-4 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          ) : null}
          <button
            className="mt-4 bg-pink-500 hover:bg-pink-700 px-4 py-2 text-white uppercase rounded text-xs ml-36"
            type="submit"
            
          >
            {isOtpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;