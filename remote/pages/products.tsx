import ProductGrid from "@/components/ProductsGrid";
import React from "react";
// import Header from "host/Header";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("host/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("host/Footer"), {
  ssr: false,
});
const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-500">
            Discover our latest collection of premium products
          </p>
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
