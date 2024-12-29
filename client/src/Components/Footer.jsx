import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-10">
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-between">
        {/* Exclusive Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 5% off your first order</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Support</h2>
          <p>Chhattisgarh, India</p>
          <p>eshopy@gmail.com</p>
          <p>+91-XXXXX-XXXXX</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Account</h2>
          <p>Profile</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Link Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
