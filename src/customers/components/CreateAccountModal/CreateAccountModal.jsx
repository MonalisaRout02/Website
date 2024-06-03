import React, { useState } from 'react';

function CreateAccountModal() {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log(`User Name: ${userName}, Phone Number: ${phoneNumber}, Email: ${email}`);
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
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
      >
        Create Account
      </button>
    </>
  );
}

export default CreateAccountModal;
