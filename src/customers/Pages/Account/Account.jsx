import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Account({ showModal, handleClose }) {
  const [userData, setUserData] = useState({
    userName: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA'
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
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
  }, [showModal]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log('Updated user data:', userData);
  };

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

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
        <img src="./Images/user.png" className='w-1/3 relative m-auto' alt="" />
        <div className="w-full h-full overflow-auto">
          {isEditing ? (
            <form onSubmit={handleSaveClick} className="space-y-4">
              <div>
                <label className="block text-gray-700">User Name</label>
                <input
                  type="text"
                  value={userData.userName}
                  onChange={(e) => handleChange('userName', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={userData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  value={userData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <button type="submit" className="w-full py-2 px-4 bg-stone-500 text-white rounded-md hover:bg-stone-600">
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="space-y-3 justify-center mt-3">
                <p><strong>User Name:</strong> {userData.userName}</p>
                <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Address:</strong> {userData.address}</p>
              </div>
              <div>
                <button onClick={handleEditClick} className="w-full py-2 px-4 my-3 bg-stone-500 text-white rounded-md hover:bg-stone-600">
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
