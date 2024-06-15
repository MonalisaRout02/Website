import React from 'react';
import ProductCard from '../../components/Products/ProductCard'; // Assuming you have a ProductCard component
import productsData from '../../components/Products/ProductsData'; // Import your sample product data
import FilterSidebar from '../../components/Products/FilterSidebar'; // Import the FilterSidebar component

const Products = () => {

  
  const renderProductCards = () => {
    return productsData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-0">
      {/* Filter Sidebar */}
      <FilterSidebar />
      {/* Product Grid */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-2 my-8">
        {/* Render Product Cards */}
        {renderProductCards()}
      </div>
    </div>
  );
};

export default Products;
