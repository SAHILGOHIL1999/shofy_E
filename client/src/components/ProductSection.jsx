import React, { useState } from 'react';
import product_1 from '../assets/images/prodcut-1.jpg';
import product_2 from '../assets/images/prodcut-2.jpg';
import product_3 from '../assets/images/prodcut-3.jpg';
import product_4 from '../assets/images/prodcut-4.jpg';
import product_5 from '../assets/images/prodcut-5.jpg';
import product_6 from '../assets/images/prodcut-6.jpg';
import product_7 from '../assets/images/prodcut-7.jpg';
import product_8 from '../assets/images/prodcut-8.jpg';

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Whitetails Women's Open Sky",
        category: "Clothing",
        store: "Whitetails Store",
        price: 340.00,
        oldPrice: 475.00,
        rating: 5,
        img: product_1
    },
    {
        id: 2,
        name: "Simple Modern School Boys",
        category: "Bags",
        store: "Backpack, Wonder",
        price: 102.00,
        oldPrice: 119.00,
        rating: 5,
        img: product_2
    },
    {
        id: 3,
        name: "Women's Essentials Convertible",
        category: "Shoes",
        store: "Shoe, Men's",
        price: 45.00,
        rating: 5,
        img: product_3
    },
    {
        id: 4,
        name: "Calvin Klein Gabrianna Novelty",
        category: "Bags",
        store: "Bag, Wonder",
        price: 245.00,
        oldPrice: 120.00,
        rating: 5,
        img: product_4
    },
    {
        id: 5,
        name: "Tommy Hilfiger Women’s Jaden",
        category: "Bags",
        store: "Bag, Wonder",
        price: 40.00,
        rating: 5,
        img: product_5
    },
    {
        id: 6,
        name: "Govicta Men's Shoes Leather",
        category: "Shoes",
        store: "Shoes",
        price: 75.00,
        oldPrice: 79.00,
        rating: 5,
        img: product_6
    },
    {
        id: 7,
        name: "Legendary Whitetails Men's.",
        category: "Clothing",
        store: "Mens, Whitetails Store",
        price: 38.00,
        rating: 5,
        img: product_7
    },
    {
        id: 8,
        name: "Backpack, School Bag.",
        category: "Bags",
        store: "Bag Store",
        price: 105.00,
        rating: 5,
        img: product_8
    }
];

const POPULAR_CATEGORIES = [
    { id: 1, name: "Crew Neck T-shirt", price: "34.95", img: product_1 },
    { id: 2, name: "Running Sport Shoes", price: "49.99", img: product_3 },
    { id: 3, name: "Leather Tote Handbag", price: "85.00", img: product_4 },
    { id: 4, name: "Children's Summer Wear", price: "29.95", img: product_5 },
    { id: 5, name: "Premium Nylon Backpack", price: "64.00", img: product_2 }
];

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState('All Collection');

    const filteredProducts = activeTab === 'All Collection'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
            
            {/* ================= સેક્શન ૧: POPULAR ON THE SHOFY STORE ================= */}
            <div className="mb-24 relative group/slider select-none">
                <div className="text-center mb-10">
                    <p className="text-[#8b2252] font-medium tracking-wider text-sm">Shop by Category</p>
                    <h2 className="text-3xl sm:text-4xl font-semibold mt-1 text-[#0F1E29]">Popular on the Shofy store.</h2>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute left-[-20px] top-[60%] -translate-y-1/2 bg-white text-black w-11 h-11 rounded-full shadow-lg flex items-center justify-center z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 border border-gray-100 hover:bg-gray-50">
                    <i className="fas fa-arrow-left text-sm"></i>
                </button>
                <button className="absolute right-[-20px] top-[60%] -translate-y-1/2 bg-white text-black w-11 h-11 rounded-full shadow-lg flex items-center justify-center z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 border border-gray-100 hover:bg-gray-50">
                    <i className="fas fa-arrow-right text-sm"></i>
                </button>

                {/* Categories Horizontal Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 bg-gray-100/60 p-0.5 rounded-sm overflow-hidden">
                    {POPULAR_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="relative bg-[#F5F6F8] aspect-[4/5] flex flex-col justify-center items-center p-6 group transition-all duration-300 overflow-hidden">
                            
                            {/* Product Image */}
                            <img src={cat.img} alt={cat.name} className="max-h-[75%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105" />
                            
                            {/* Hover Slide-In Card Overlay */}
                            <div className="absolute inset-2 bg-white shadow-xl flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-center z-10">
                                <p className="text-xs text-gray-400 font-normal">From ${cat.price}</p>
                                <h4 className="font-medium text-[#0F1E29] mt-1 text-sm sm:text-base line-clamp-2 px-1">{cat.name}</h4>
                                <button className="mt-4 px-5 py-2 border border-gray-900 text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all duration-300">
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>


            {/* ================= સેક્શન ૨: MAIN PRODUCTS SECTION ================= */}
            <div className="text-center mb-6">
                <p className="text-[#8b2252] font-medium tracking-wider text-sm uppercase">All Product Shop</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 text-[#0F1E29] tracking-tight">Customer Favorite Style Product</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-12 border-b border-gray-100 pb-4 text-xs sm:text-sm font-medium select-none">
                {['All Collection', 'Shoes', 'Clothing', 'Bags'].map((tab, idx, arr) => (
                    <React.Fragment key={tab}>
                        <button 
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-2 transition-colors duration-300 ${activeTab === tab ? 'text-[#8b2252] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#8b2252] text-white text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#8b2252]">
                                    {tab === 'All Collection' ? PRODUCTS_DATA.length : PRODUCTS_DATA.filter(p => p.category === tab).length}
                                </span>
                             )}
                        </button>
                        {idx < arr.length - 1 && <span className="text-gray-300">•</span>}
                    </React.Fragment>
                ))}
            </div>

            {/* Main Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer flex flex-col justify-between">
                        
                        {/* Image Box + Left Side Controls */}
                        <div className="relative bg-[#F5F6F8] rounded-none overflow-hidden aspect-square flex justify-center items-center p-8">
                            <img src={product.img} alt={product.name} className="max-h-[90%] max-w-[90%] object-contain" />

                            <div className="absolute top-6 left-4 flex flex-col gap-2 select-none z-20">
                                {[
                                    { icon: "fas fa-shopping-bag", label: "Add to Cart" },
                                    { icon: "far fa-eye", label: "Quick View" },
                                    { icon: "far fa-heart", label: "Wishlist" },
                                    { icon: "fas fa-exchange-alt", label: "Compare" }
                                ].map((btn, i) => (
                                    <div key={i} className="flex items-center relative group/btn">
                                        <button
                                            className="bg-white text-gray-700 hover:text-white w-9 h-9 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-[#0F1E29] transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
                                            style={{ transitionDelay: `${i * 40}ms` }}
                                            aria-label={btn.label}
                                        >
                                            <i className={`${btn.icon} text-xs`}></i>
                                        </button>
                                        <span className="absolute left-11 scale-95 opacity-0 pointer-events-none transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:scale-100 bg-[#0F1E29] text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-md whitespace-nowrap after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-r-[#0F1E29]">
                                            {btn.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Text Metadata */}
                        <div className="mt-4 flex flex-col items-start">
                            <p className="text-[11px] font-normal text-gray-400 uppercase tracking-wider">{product.store}</p>
                            <h3 className="font-medium text-gray-900 mt-1 text-base line-clamp-2 min-h-[2.5rem] group-hover:text-[#8b2252] transition-colors duration-300">
                                {product.name}
                            </h3>

                            {/* Rating Stars */}
                            <div className="flex items-center gap-0.5 mt-1 text-[#FFB400] text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="fas fa-star"></span>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-lg font-bold text-[#0F1E29]">${product.price.toFixed(2)}</span>
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;