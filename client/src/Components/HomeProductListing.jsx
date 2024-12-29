import React, { useContext } from 'react'
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const HomeProductListing = () => {
  const navigate = useNavigate()
  const { filteredProducts } = useProductContext()
  return (
    <div>
      <h1 className='ml-6 text-2xl mt-4 font-bold'>New Arrival</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer lg:grid-cols-5 gap-6 p-6">
        {filteredProducts.slice(0, 5).map((product) => (
          <div
            key={product.id}
            onClick={()=>navigate(`/productDetail/${product._id}`)}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Product Image */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-2">
              <h1 className="text-lg font-semibold">{product.name}</h1>
              <p className="text-sm text-gray-600">
                {product.description.length > 50
                  ? `${product.description.slice(0, 45)}...`
                  : product.description}
              </p>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductListing;