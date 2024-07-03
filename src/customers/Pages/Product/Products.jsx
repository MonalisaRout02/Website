import React, {useState, useEffect} from 'react';
import ProductCard from '../../components/Products/ProductCard'; // Assuming you have a ProductCard component
import FilterSidebar from '../../components/Products/FilterSidebar'; // Import the FilterSidebar component
import axios from 'axios'; // Import Axios for HTTP requests

const Products = ({ setCurrentView, category , setCategory ,setProduct, userData, setShowModal, isFavorite, setIsFavorite}) => {
  const [products, setProducts] = useState([]);// State to track selected category

  useEffect(() => {
    // Fetch products based on category when category state changes
    if (category) {
      fetchProductsByCategory(category);
    }
  }, [category]); // Dependency array ensures effect runs when category changes

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error (e.g., show error message)
    }
  };

  const renderProductCards = () => {
    return products.map((product) => (
      <ProductCard setCurrentView={setCurrentView} key={product.p_id} product={product} setProduct={setProduct} userData={userData} setShowModal={setShowModal} isFavorite={isFavorite} setIsFavorite={setIsFavorite}/>
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mx-0">
      {/* Filter Sidebar */}
      <FilterSidebar setCategory={setCategory} />
      {/* Product Grid */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-2 my-3 ">
        {/* Render Product Cards */}
        {renderProductCards()}
      </div>
    </div>
  );
};

export default Products;
