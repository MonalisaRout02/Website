import React, { useState } from 'react';
// import Tooltip from '../Tooltip/Tooltip';  // Adjust the import path as necessary

function MegaMenu({ setCurrentView, setCategory }) {

  const handleCategoryClick = (category) => {
    const normalizedCategory = category.charAt(0) + category.slice(1).toLowerCase(); // Capitalize the first letter
    setCategory(normalizedCategory);
    setCurrentView('Products');
  };

  return (
    <div className="bg-[#fffbf8] py-1 relative">
      <div className="container mx-auto flex justify-center space-x-8">
        {['HAARA', 'NECKLACE', 'RINGS', 'SETS', 'BANGLES', 'EARRINGS', 'GOLD WAISTBELT'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-700 hover:text-gray-900 text-sm font-roboto font-semibold relative"
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
