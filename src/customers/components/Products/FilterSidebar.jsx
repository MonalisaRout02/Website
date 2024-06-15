import React, { useState } from 'react';
import './FilterSidebar.css'; // Import your custom CSS file

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState(500); // Initial value set to 500

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
  
      <div className="md:col-span-1 bg-stone-100 p-4 py-10 rounded-lg sticky top-10 h-screen">
      <h2 className="text-lg font-semibold mb-4">Filter Sidebar</h2>
      {/* Price Range Filter */}
      <div className="mb-4">
        <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <input 
          type="range" 
          id="priceRange" 
          name="priceRange" 
          min="0" 
          max="10000" 
          step="100" 
          value={priceRange} 
          onChange={handlePriceChange} 
          className="block w-full custom-range-slider" 
        />
        <div className="text-sm text-gray-700 mt-2">Selected Price: ₹{priceRange}</div>
      </div>
      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select id="categoryFilter" name="categoryFilter" className="block w-full">
          <option value="">All Categories</option>
          <option value="category1">Necklace</option>
          <option value="category2">Sets</option>
          <option value="category1">Bangles</option>
          <option value="category2">Rings</option>
          <option value="category1">Kada</option>
       
          {/* Add more options as needed */}
        </select>
      </div>
      {/* Add more filters as needed */}
    </div>
    
    
  );
};

export default FilterSidebar;