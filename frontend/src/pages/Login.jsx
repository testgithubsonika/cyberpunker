import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from '../components/OtpInput';
export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("")
      const [showOtpInput, setShowOtpInput] = useState(false);

  const navigate = useNavigate();
  const handlePhoneNumber =(e) =>{
 setPhoneNumber(e.target.value);
  }
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
     //? API integration
       setShowOtpInput(true);}
   const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
      navigate('/Home');
  };
  return (
     <div className=''>
     {!showOtpInput ? 
        <form onSubmit={handlePhoneSubmit}
        className='mt-32 flex-auto justify-self-center'>
          <input
          className="flex  w-96 px-4 py-2 mt-26  border rounded-lg bg-lime-100  focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-600 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <div className='mt-6'>
          <button className='w-96 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-500 rounded-lg hover:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-opacity-50 ' type="submit">Submit</button>
        </div></form> :
        <div className=''>
            <p className='w-60 justify-self-center font-serif border bg-lime-200 rounded mt-32  text-center text-black-800'><h1 className='text-slate-700 font-serif'>Enter OTP sent to</h1> {phoneNumber} </p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
       </div>}
    
    </div>
  )
}
