import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BACKEND_URL from '../constant';

const Dashboard = () => {
  const [products, setProducts] = useState([]); 
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', stock: '', image: '', category: '' });
  const [editProduct, setEditProduct] = useState(null);

  // Fetch Products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/products`);
      console.log('Fetched data:', data);
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };


  // Add Product
  const handleAddProduct = async () => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/products`, newProduct);
      setProducts((prevProducts) => [...prevProducts, data]);
      setNewProduct({ name: '', price: '', description: '', stock: '', category: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Update Product
  const handleUpdateProduct = async () => {
    try {
      const { data } = await axios.put(`${BACKEND_URL}/api/products/${editProduct._id}`, editProduct);
      setProducts(products.map((product) => (product._id === data._id ? data : product)));
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Add Product */}
      <div className="mb-8 ">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <div className="flex gap-4 flex-col">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="border p-2 rounded"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* Edit Product */}
      {editProduct && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
          <div className="flex gap-4 flex-col">
            <input
              type="text"
              value={editProduct.name}
              onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={editProduct.price}
              onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={editProduct.description}
              onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={editProduct.stock}
              onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={editProduct.category}
              onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={editProduct.image}
              onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
              className="border p-2 rounded"
            />
            <button
              onClick={handleUpdateProduct}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
            <button
              onClick={() => setEditProduct(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> 
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border p-4 rounded shadow">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <img src={product.image} alt={product.name} className='w-12 h-12 rounded-full mt-2 mb-2 border-2 ' />
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>Stock: {product.stock}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setEditProduct(product)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
