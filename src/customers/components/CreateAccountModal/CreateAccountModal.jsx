import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../firebase.config'; 

function CreateAccountModal() {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpMessage, setOtpMessage] = useState('');

  useEffect(() => {
    setupRecaptcha();
  }, []);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow getOTP
          handleGetOtp();
        },
        'expired-callback': () => {
          // Reset the reCAPTCHA
          window.recaptchaVerifier.render().then(function(widgetId) {
            window.grecaptcha.reset(widgetId);
          });
        }
      });
    }
  };

  const handleGetOtp = () => {
  const formattedPhoneNumber = `+${phoneNumber}`; // Ensure phoneNumber includes country code
  setupRecaptcha();
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
    .then((confirmationResult) => {
      setVerificationId(confirmationResult.verificationId);
      setOtpSent(true);
      setOtpError('');
      setOtpMessage('OTP sent successfully.');
    }).catch((error) => {
      console.error("SMS not sent", error);
      setOtpError('Error sending OTP. Please try again.');
      setOtpMessage('');
    });
  };

  const handleVerifyOtp = async () => {
    try {
      if (!verificationId || !otp) {
        throw new Error('Verification ID or OTP is missing.');
      }
      
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      const result = await auth.signInWithCredential(credential);
      console.log('Phone number verified:', result.user);
      setOtpMessage('Phone number verified successfully.');
      handleSubmit(); // Now you can handle form submission
    } catch (error) {
      console.error("OTP verification failed", error);
      setOtpError('Invalid OTP. Please enter the correct OTP.');
      setOtpMessage('');
    }
  };
  

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-account', {
        userName,
        phoneNumber,
        email,
      });
      console.log('User created:', response.data);
    } catch (error) {
      console.error('There was an error creating the account:', error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={handleUserNameChange}
        className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
      <PhoneInput
        country={'us'}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true
        }}
        inputStyle={{
          width: '100%',
          height: 'calc(2.25rem + 2px)',
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.5',
          color: '#495057',
          backgroundColor: '#fff',
          backgroundImage: 'none',
          backgroundClip: 'padding-box',
          border: '1px solid #ced4da',
          borderRadius: '0.25rem',
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
        }}
      />
      {otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
          <button
            onClick={handleVerifyOtp}
            className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
          >
            Verify OTP
          </button>
          <p className="text-sm text-green-500 mt-2">{otpMessage}</p>
          <p className="text-sm text-red-500 mt-2">{otpError}</p>
        </>
      ) : (
        <button
          onClick={handleGetOtp}
          className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
        >
          Get OTP
        </button>
      )}
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
      >
        Create Account
      </button>
      <div id="recaptcha-container"></div>
    </>
  );
}

export default CreateAccountModal;
