import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import productsData from './ProductsData'; // Import your sample product data
import FilterSidebar from './FilterSidebar'; // Import the FilterSidebar component

const Products = () => {

  
  const renderProductCards = () => {
    return productsData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
      {/* Filter Sidebar */}
      <FilterSidebar />
      {/* Product Grid */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-2 my-10 ">
        {/* Render Product Cards */}
        {renderProductCards()}
      </div>
    </div>
  );
};

export default Products;
