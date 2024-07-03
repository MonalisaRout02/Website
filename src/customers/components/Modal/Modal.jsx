import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../../firebase.config'; // Ensure you import Firebase auth properly
import axios from 'axios';
import CreateAccountModal from '../CreateAccountModal/CreateAccountModal';

function Modal({ showModal, handleClose, onSignIn, setUserData, setIsSignedIn }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpMessage, setOtpMessage] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  useEffect(() => {
    if (!showModal) {
      setIsCreatingAccount(false);
    }
  }, [showModal]);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  const handleSignIn = () => {
    setIsCreatingAccount(false);
    window.location.reload();
  };
  
  // Function to store user data in local storage
  const storeUserDataInLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          handleRequestOtpClick();
        },
        'expired-callback': () => {
          // Handle Recaptcha expired
        },
      });
    }
  };

  const handleRequestOtpClick = () => {
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
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const result = await signInWithCredential(auth, credential);
      console.log('Phone number verified:', result.user);
      setOtpMessage('Phone number verified successfully.');
      setIsSignedIn(true);
      fetchUserDetails(); // Fetch user details after successful verification
      setTimeout(() => {
        window.location.reload(); // Refresh the page after a delay
      }, 3000); // Adjust the delay time as needed (2000 milliseconds = 2 seconds)
    } catch (error) {
      console.error('OTP verification failed', error);
      setOtpError('Invalid OTP. Please enter the correct OTP.');
      setOtpMessage('');
    }
  };

  const fetchUserDetails = async () => {
    try {
      // Replace with your API endpoint to fetch user details
      const response = await axios.get(`http://localhost:5000/users/get-user/${phoneNumber}`);
      setUserData(response.data); // Update user data in parent component
      storeUserDataInLocalStorage(response.data); 
      onSignIn(); // Callback to notify successful sign-in
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-end z-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 mt-16 mr-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{isCreatingAccount ? 'Create Account' : 'Sign In'}</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-4">
          {isCreatingAccount ? (
            <CreateAccountModal onSignIn={handleSignIn} />
          ) : (
            <>
              <PhoneInput
                country={'in'} // Set your desired default country
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
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
                  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
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
                  <p className="text-sm text-green-500 mt-1">{otpMessage}</p>
                  <p className="text-sm text-red-500 mt-1">{otpError}</p>
                </>
              ) : (
                <button
                  onClick={handleRequestOtpClick}
                  className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
                >
                  Request OTP
                </button>
              )}
              <div className="text-center">
                <span className="text-gray-700">New user? </span>
                <a href="#" onClick={handleCreateAccountClick} className="text-stone-500 hover:underline">
                  Create Account
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default Modal;
