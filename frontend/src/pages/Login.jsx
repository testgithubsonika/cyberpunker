import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "../components/OtpInput";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone number validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("⚠ Invalid Phone Number");
      return;
    }

    // API integration (Placeholder)
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
    navigate("/Home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {!showOtpInput ? (
        <form
          onSubmit={handlePhoneSubmit}
          className="bg-green-100 shadow-md rounded-lg px-8 py-6 max-w-sm w-full text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>
          <p className="text-gray-500 mb-4">Enter your phone number to receive an OTP</p>

          <input
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:border-lime-500 focus:ring focus:ring-lime-400 focus:outline-none transition"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />

          <button
            className="mt-4 w-full px-6 py-2 text-white font-medium tracking-wide bg-lime-500 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-300 transition"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-sm w-full text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Enter OTP</h2>
          <p className="text-gray-500 mb-4">Sent to {phoneNumber}</p>

          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}
