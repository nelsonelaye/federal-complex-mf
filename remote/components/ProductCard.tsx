import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div
      className="!h-[350px] w-full max-w-80 overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 rounded-lg bg-white"
      style={{ maxWidth: 350, width: "100%", margin: "auto" }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        style={{
          height: 250,
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div
        className="p-4"
        style={{
          padding: "16px",
        }}
      >
        <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
