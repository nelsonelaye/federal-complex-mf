import Image from "next/image";
import RemoteComponent from "../components/RemoteComponent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "remote/products";
import dynamic from "next/dynamic";
import { ProductCardProps } from "@/types";

const RemoteProductCard = dynamic(() => import("remote/ProductCard"), {
  ssr: false,
});

export default function Home() {
  console.log("remoteData", products);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Premium Products for Every Need
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Explore our curated collection of high-quality items, designed to
              enhance your everyday experience
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/products" className="cursor-pointer">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center cursor-pointer">
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </a>
              <button className="border border-white text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Featured Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-500 mb-6">
            Discover our latest collection of premium products
          </p>

          {/* consume products data from from remote app */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <RemoteProductCard
                key={product.id}
                {...(product as ProductCardProps)}
              />
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Categories
          </h2>
          <p className="text-gray-500 mb-6">Browse products by category</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Electronics", "Audio", "Accessories", "Smart Home"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-medium text-lg mb-2">{category}</h3>
                  <button className="text-blue-600 hover:underline">
                    <a href="/products" className="cursor-pointer">
                      View Products
                    </a>
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mb-6">
            We provide the best shopping experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 className="font-medium text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-500">
                All products undergo rigorous quality testing
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <h3 className="font-medium text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-500">Free delivery on orders over $100</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <h3 className="font-medium text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-500">30-day hassle-free return policy</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to Shop?
            </h3>
            <p className="text-gray-500 mb-4 md:mb-0">
              Explore our entire collection and find your perfect match.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            <a href="/products" className="cursor-pointer">
              Browse All Products
            </a>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
