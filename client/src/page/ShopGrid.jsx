import React, { useState } from "react";

// 🛍️ Product data for the main grid
const REAL_PRODUCTS = [
  {
    id: 1,
    store: "Bag, Wonder",
    name: "Calvin Klein Gabrianna Novelty",
    price: "$340.00",
    oldPrice: "$475.00",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    rating: 5
  },
  {
    id: 2,
    store: "Whitetails Store",
    name: "Whitetails Women's Open Sky T-Shirt",
    price: "$340.00",
    oldPrice: "$475.00",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    rating: 5
  },
  {
    id: 3,
    store: "Backpack, Wonder",
    name: "Simple Modern School Boys Backpack",
    price: "$340.00",
    oldPrice: "$475.00",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    rating: 5
  }
];

// 🎨 Color filter data (6 colors total)
const FILTER_COLORS = [
  { name: "Red", colorClass: "bg-[#ff3b30]", count: 8 },
  { name: "Dark Blue", colorClass: "bg-[#3b5998]", count: 14 },
  { name: "Orange", colorClass: "bg-[#ff9500]", count: 18 },
  { name: "Purple", colorClass: "bg-[#af52de]", count: 23 },
  { name: "Yellow", colorClass: "bg-[#ffcc00]", count: 17 },
  { name: "Green", colorClass: "bg-[#34c759]", count: 15 },
];

// ⭐ Top rated products data (4 products total)
const TOP_RATED_PRODUCTS = [
  {
    id: 1,
    name: "Smart watches wood...",
    price: "$150.00",
    rating: "4.2",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80"
  },
  {
    id: 2,
    name: "Decoration for panda.",
    price: "$120.00",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=150&q=80"
  },
  {
    id: 3,
    name: "Trending Watch for Man",
    price: "$99.00",
    rating: "3.5",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=150&q=80"
  },
  {
    id: 4,
    name: "Minimal Backpack.",
    price: "$165.00",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&q=80"
  }
];

// 🏷️ Popular brands data (2-column layout grid)
const POPULAR_BRANDS = [
  { name: "Coffee Shop", bg: "bg-[#f4f6f8]", text: "font-serif" },
  { name: "Smile", bg: "bg-[#f4f6f8]", text: "italic font-bold" },
  { name: "The Backyard", bg: "bg-[#f4f6f8]", text: "tracking-widest uppercase font-semibold" },
  { name: "Hipster", bg: "bg-[#f4f6f8]", text: "font-mono" },
  { name: "Mockup", bg: "bg-[#f4f6f8]", text: "font-black" },
  { name: "The Retro", bg: "bg-[#f4f6f8]", text: "tracking-wider font-extrabold" },
  { name: "Iconic", bg: "bg-[#f4f6f8]", text: "font-sans uppercase font-bold" },
  { name: "Shutter Speed", bg: "bg-[#f4f6f8]", text: "font-serif uppercase tracking-tight" }
];

const ShopGrid = () => {
  const [priceRange, setPriceRange] = useState(300);

  return (
    <div className="w-full bg-white font-sans text-left text-gray-900 select-none">
      
      {/* 🥖 Breadcrumbs Header */}
      <div className="bg-[#f4f6f8] py-10 px-6 mb-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-950">Shop Grid</h1>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Home <span className="mx-1 text-gray-300">•</span> <span className="text-gray-900 font-semibold">Shop Grid</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-20">
          
          {/* 👈 📌 Left Sidebar (Side Filters) */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* 1. Categories Section */}
            <div>
              <h3 className="text-gray-950 font-bold text-base mb-4 pb-2 border-b border-gray-100">Categories</h3>
              <div className="max-h-56 overflow-y-auto pr-2 space-y-3 text-sm text-gray-600 font-medium custom-scrollbar">
                <div className="flex justify-between items-center hover:text-[#7a1533] cursor-pointer"><span>Leather Man Watch</span> <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">22</span></div>
                <div className="flex justify-between items-center hover:text-[#7a1533] cursor-pointer"><span>Trending Watch</span> <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">17</span></div>
                <div className="flex justify-between items-center hover:text-[#7a1533] cursor-pointer"><span>Google</span> <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">22</span></div>
                <div className="flex justify-between items-center hover:text-[#7a1533] cursor-pointer"><span>Woman Wacth</span> <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">14</span></div>
              </div>
            </div>

            {/* 2. Price Filter */}
            <div>
              <h3 className="text-gray-900 font-bold text-base mb-4 pb-2 border-b border-gray-100">Price Filter</h3>
              <input 
                type="range" min="75" max="500" value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-[#7a1533] cursor-pointer mb-3" 
              />
              <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
                <span>$75 - ${priceRange}</span>
                <button className="bg-gray-100 hover:bg-[#7a1533] hover:text-white px-4 py-1.5 rounded transition text-xs font-bold uppercase">Filter</button>
              </div>
            </div>

            {/* 3. Color Filter */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-5 pb-2 border-b border-gray-100">Filter by Color</h3>
              <div className="space-y-3.5 text-sm font-medium text-gray-700">
                {FILTER_COLORS.map((item, index) => (
                  <div key={index} className="flex justify-between items-center cursor-pointer group">
                    <div className="flex items-center gap-3.5">
                      <span className={`w-5 h-5 rounded-full ${item.colorClass} shadow-inner inline-block shrink-0`}></span>
                      <span className="text-[15px] text-gray-600 group-hover:text-[#7a1533] transition-colors">{item.name}</span>
                    </div>
                    <span className="text-[12px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md min-w-[24px] text-center">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Top Rated Products */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-5 pb-2 border-b border-gray-100">Top Rated Products</h3>
              <div className="space-y-5">
                {TOP_RATED_PRODUCTS.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-20 h-20 bg-[#f4f6f8] rounded-xl overflow-hidden shrink-0 border border-gray-100">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="flex text-amber-400 text-[11px] gap-0.5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="text-[11px] text-gray-400 font-bold">({product.rating})</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#7a1533] transition-colors mb-0.5">
                        {product.name}
                      </h4>
                      <span className="text-[#0c141c] font-extrabold text-[14px]">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Popular Brands */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-5 pb-2 border-b border-gray-100">Popular Brands</h3>
              <div className="grid grid-cols-2 gap-4">
                {POPULAR_BRANDS.map((brand, index) => (
                  <div key={index} className={`${brand.bg} p-4 rounded-xl flex items-center justify-center text-center cursor-pointer hover:bg-[#e8ecef] transition border border-gray-50 h-16 shadow-sm`}>
                    <span className={`text-[12px] text-gray-800 tracking-wide line-clamp-2 ${brand.text}`}>{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 👉 📌 Right Side Main Content (Product Grid Area) */}
          <div className="lg:col-span-3">
            
            {/* Top Filter Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-5 mb-8 gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <button className="border border-gray-300 p-2.5 rounded bg-white text-gray-900"><i className="fas fa-th-large"></i></button>
                <button className="border border-gray-200 p-2.5 rounded bg-white hover:text-gray-900"><i className="fas fa-list"></i></button>
                <span className="ml-2">Showing 1–{REAL_PRODUCTS.length} of 26 results</span>
              </div>
              <select className="bg-white border border-gray-200 text-sm font-medium rounded-lg px-4 py-2.5 text-gray-700 cursor-pointer focus:outline-none">
                <option>Default Sorting</option>
              </select>
            </div>

            {/* 🛍️ Products Grid Layout (with vertical hover actions and icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {REAL_PRODUCTS.map((product) => (
                <div key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden transition duration-300 relative">
                  
                  {/* Image Square Box */}
                  <div className="w-full aspect-[1/1] bg-[#f4f6f8] rounded-xl overflow-hidden relative">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-102" />
                    
                    {/* 🛠️ Vertical Hover Panel with Font Awesome Icons */}
                    <div className="absolute left-4 top-14 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-10">
                      
                      {/* Add to Cart Button with Tooltip */}
                      <div className="relative flex items-center group/btn">
                        <button className="bg-[#0c141c] text-white w-11 h-11 rounded-full shadow-md flex items-center justify-center hover:bg-[#7a1533] transition-colors">
                          <i className="fas fa-shopping-cart text-sm"></i>
                        </button>
                        <span className="absolute left-full ml-2 bg-[#0c141c] text-white text-[11px] font-bold px-3 py-1.5 rounded-md opacity-0 group-hover/btn:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
                          Add to Cart
                        </span>
                      </div>

                      {/* Quick View */}
                      <button className="bg-white text-gray-800 w-11 h-11 rounded-full shadow-md flex items-center justify-center hover:bg-[#7a1533] hover:text-white transition-colors">
                        <i className="fas fa-eye text-sm"></i>
                      </button>

                      {/* Wishlist */}
                      <button className="bg-white text-gray-800 w-11 h-11 rounded-full shadow-md flex items-center justify-center hover:bg-[#7a1533] hover:text-white transition-colors">
                        <i className="far fa-heart text-sm"></i>
                      </button>

                      {/* Compare */}
                      <button className="bg-white text-gray-800 w-11 h-11 rounded-full shadow-md flex items-center justify-center hover:bg-[#7a1533] hover:text-white transition-colors">
                        <i className="fas fa-exchange-alt text-sm"></i>
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="pt-4 flex flex-col flex-grow">
                    <span className="text-[13px] text-gray-400 font-medium mb-1">{product.store}</span>
                    <h4 className="text-gray-900 font-semibold text-[16px] leading-snug mb-1.5 line-clamp-2 group-hover:text-[#7a1533] transition-colors cursor-pointer">
                      {product.name}
                    </h4>
                    
                    {/* Golden Five-Star Rating */}
                    <div className="flex gap-0.5 text-xs text-amber-400 mb-2">
                      {[...Array(product.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-gray-950 font-bold text-[16px]">{product.price}</span>
                      <span className="text-gray-400 line-through text-[13px] font-medium">{product.oldPrice}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopGrid;