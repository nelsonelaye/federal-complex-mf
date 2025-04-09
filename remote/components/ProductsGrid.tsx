import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductGrid = () => {
  return (
    <div className="flex flow-row flex-wrap gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
