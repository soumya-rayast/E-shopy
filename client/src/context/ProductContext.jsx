import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import BACKEND_URL from '../constant';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch products on mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${BACKEND_URL}/api/products/`);
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Filter products based on the search term
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered); 
    }, [searchTerm, products]);

    // Provide context value
    return (
        <ProductContext.Provider value={{ products, filteredProducts, setSearchTerm }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);
