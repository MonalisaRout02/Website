import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function Account({ showModal, handleClose, userData, setIsSignedIn, setUserData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [saveError, setSaveError] = useState('');

  const getUserDataFromLocalStorage = () => {
    const userDataString = localStorage.getItem('userData');
    return userDataString ? JSON.parse(userDataString) : null;
  };

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setUserData(getUserDataFromLocalStorage());
    }
  }, [setUserData]);

  const [editedUserData, setEditedUserData] = useState({
    userName: userData?.u_name || '',
    phoneNumber: userData?.ph_no || '',
    email: userData?.email || '',
    address: userData?.addr || ''
  });

  useEffect(() => {
    setEditedUserData({
      userName: userData?.u_name || '',
      phoneNumber: userData?.ph_no || '',
      email: userData?.email || '',
      address: userData?.addr || ''
    });
  }, [userData]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, handleClose]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/update-user', editedUserData);
      console.log('Updated user data:', response.data);
      setUserData(response.data); // Update the user data with the response
      localStorage.setItem('userData', JSON.stringify(response.data)); // Update localStorage
      setSaveMessage('Changes Updated Successfuly!!')
      setTimeout(() => {
        window.location.reload(); // Refresh the page after a delay
      }, 3000);
      setIsEditing(false);
    } catch (error) {
      setSaveError('Error in updating the changes.')
      console.error('Error updating user data:', error);
    }
  };

  const handleChange = (field, value) => {
    setEditedUserData({ ...editedUserData, [field]: value });
  };

  const handleLogout = () => {
    // Clear user data from localStorage and set isSignedIn to false
    localStorage.removeItem('userData');
    setIsSignedIn(false);
    setTimeout(() => {
      window.location.reload(); // Refresh the page after a delay
    }, 2000); // Adjust the delay time as needed (2000 milliseconds = 2 seconds)
  };

  if (!userData) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
        showModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full max-w-md md:w-1/4 sm:w-1/3 bg-white rounded-md shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
          showModal ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Account Information</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        <img src="./Images/user.png" className="w-1/3 relative m-auto" alt="User" />
        <div className="w-full h-full overflow-auto">
          {isEditing ? (
            <form onSubmit={handleSaveClick} className="space-y-4">
              <div>
                <label className="block text-gray-700">User Name</label>
                <input
                  type="text"
                  value={editedUserData.userName}
                  onChange={(e) => handleChange('userName', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={editedUserData.phoneNumber}
                  readOnly
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={editedUserData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  value={editedUserData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSaveClick}
                  className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600"
                >
                  Save Changes
                </button>
                <p className="text-sm text-green-500 mt-1">{saveMessage}</p>
                <p className="text-sm text-red-500 mt-1">{saveError}</p>
              </div>
            </form>
          ) : (
            <div className="space-y-3 justify-center mt-3">
              <p><strong>User Name:</strong> {userData.u_name}</p>
              <p><strong>Phone Number:</strong> {userData.ph_no}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Address:</strong> {userData.addr}</p>
            </div>
          )}
          {!isEditing && (
            <div>
              <button
                onClick={handleEditClick}
                className="w-full py-2 px-4 my-3 bg-stone-500 text-white rounded-md hover:bg-stone-600"
              >
                Edit
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2 px-4 bg-stone-700 text-white rounded-md hover:bg-stone-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
