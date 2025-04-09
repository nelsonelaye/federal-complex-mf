import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Federal Complex</h3>
            <p className="text-gray-600 text-sm">
              Your destination for premium quality products at competitive
              prices.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Deals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>&copy; 2025 Federal Complex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
