import React from 'react'
import { product } from "./data/product.js";
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 m-10 mt-7 pt-1 rounded-2xl shadow-lg">
      <h1 className="text-6xl text-center font-bold text-emerald-800 mt-20 mb-10">
        Products We Offer
        <div className="w-32 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
      </h1>
      
      <h3 className="text-2xl text-justify text-gray-700 m-28 -mt-2 mb-2 leading-relaxed">
        Our products, crafted from organic waste, are eco-friendly, non-toxic, and safe for both humans and animals. Designed to enhance soil health and improve water quality, they serve as natural fertilizers, pesticides, and disinfectants. These versatile products offer cost-effective solutions for sustainable farming practices, promoting healthier crops and livestock. By integrating these products into agricultural systems, we contribute to a healthier environment and support eco-conscious farming methods. Their effectiveness and sustainability make them essential tools for farmers aiming to reduce their ecological footprint while achieving better yields.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 justify-center bg-transparent m-10 pb-8">
        {product.map((item, i) => (
          <ProductCard key={i} {...item} />
          // props passed to child componnet that is product card
        ))}
      </div>
    </div>
  )
}

export default Products