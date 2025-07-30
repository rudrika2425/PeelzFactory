import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 pt-7 pb-1 hover:scale-105">
      <img className="w-full h-48 object-contain p-4" src={props.img} alt="product image" />
      <span className="absolute top-0 left-0 m-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-3 py-2 text-center text-xs font-bold text-white shadow-md">
        100% Chemical Free
      </span>
             
      <div className="mt-4 px-6 pb-6">
        <a href="#" className="group">
          <h5 className="text-2xl tracking-tight font-bold text-emerald-800 group-hover:text-emerald-700 transition-colors duration-200">
            {props.name}
          </h5>
        </a>
                 
        <div className="mt-3 mb-5 flex items-center justify-between">
          <p>
            <span className="text-sm text-gray-600 leading-relaxed">{props.detail}</span>
          </p>
        </div>
        
        <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-4"></div>
      </div>
    </div>
  );
};

export default ProductCard;