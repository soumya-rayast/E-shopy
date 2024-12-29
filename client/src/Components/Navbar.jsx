import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaUserLarge, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useProductContext } from '../context/ProductContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { setSearchTerm } = useProductContext(); 
  // Apply theme classes
  const navClass = theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white';
  const menuClass = isMenuOpen ? (theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800 shadow-lg') : 'bg-transparent md:bg-transparent';
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };
  return (
    <nav className={`h-16 w-full sticky top-0 flex justify-between items-center px-4 md:px-8 border-b ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} ${navClass}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          E-Shopy
        </Link>
      </div>

      {/* Search Box */}
      <div className="hidden md:flex relative items-center">
        <IoSearch className="absolute ml-3 text-gray-500" />
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search your product"
          className="bg-gray-100 py-1 px-8 pl-10 rounded-2xl outline-none w-64"
        />
      </div>

      {/* Menu Button for Mobile */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Links */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto flex-col md:flex-row md:flex items-center ${menuClass} md:gap-5 z-50`}
      >
        <Link
          to="/"
          className="py-2 md:py-0 md:hover:border-b-2 border-black md:border-none w-full md:w-auto text-left ml-10"
        >
          Home
        </Link>
        <Link
          to="/allProduct"
          className="py-2 md:py-0 md:hover:border-b-2 border-black md:border-none w-full md:w-auto text-left ml-10"
        >
          All Products
        </Link>
        <Link to="/dashboard"
          className="py-2 md:py-0 md:hover:border-b-2 border-black md:border-none w-full md:w-auto text-left ml-10"
        >
          Dashboard
        </Link>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} mb-2 flex`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="hidden md:flex items-center justify-center cursor-pointer bg-black p-2 rounded-full">
          <FaUserLarge className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
