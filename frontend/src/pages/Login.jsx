import React from 'react'
import {useState} from 'react'
import OtpInput from '../components/OtpInput';
export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("")
      const [showOtpInput, setShowOtpInput] = useState(false);

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
  };
  return (
     <div>
     {!showOtpInput ? 
        <form onSubmit={handlePhoneSubmit}
        className='flex-auto space-y-4 text-center m-20'>
          <input
          className=''
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button className='font-bold bg-slate-600 ' type="submit">Submit</button>
        </form> :
        <div>
            <p className='font-bold py-8 my-8 bg-gray-800'>Enter OTP sent to {phoneNumber} </p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
       </div>}
    
    </div>
  )
}
