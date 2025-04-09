import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-gray-700 ">
            <h1 className="text-xl font-bold text-gray-900">Federal Complex</h1>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Products
          </a>
        </nav>
        <button className="p-2 text-gray-700 hover:text-blue-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
