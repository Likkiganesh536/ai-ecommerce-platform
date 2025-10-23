import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.images[0]} alt={product.title} className="h-48 w-full object-cover rounded"/>
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600 mt-1">₹{product.priceCents / 100}</p>
      <Link 
        to={`/product/${product.id}`} 
        className="block mt-2 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
