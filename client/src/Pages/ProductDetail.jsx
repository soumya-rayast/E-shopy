import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from '../constant';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    console.log("Product ID:", id); 
    const fetchProduct = async () => {
      if (!id) {
        console.error("No product ID provided");
        setLoading(false); 
        return; 
      }
    
      try {
        const response = await axios.get(`${BACKEND_URL}/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product'); 
      } finally {
        setLoading(false); 
      }
    };
    
  
    fetchProduct();
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!product) {
    return <div>Product not found!</div>; 
  }

  return (
    <div className="p-6">
      {/* Product Image */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 border-2 border-black h-60 object-cover rounded-md shadow-md"
        />

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-green-600">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-500">
            Category: {product.category || 'N/A'}
          </p>
          <p className="text-sm text-gray-500">
            Stock: {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
