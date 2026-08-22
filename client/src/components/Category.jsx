import React, { useRef, useState, useEffect } from 'react';
import category_1 from '../assets/images/category-1.jpg';
import category_2 from '../assets/images/category-2.jpg';
import category_3 from '../assets/images/category-3.jpg';
import category_4 from '../assets/images/category-4.jpg';
import category_5 from '../assets/images/category-5.jpg';

const productData = [
    {
        id: 1,
        title: "Crew Neck T-shirt",
        price: "$34.95",
        image: category_1,
        imageAlt: "Olive Green Long Sleeve T-shirt"
    },
    {
        id: 2,
        title: "Men's Walking Shoes",
        price: "$59.99",
        image: category_2,
        imageAlt: "Blue and yellow tennis shoes"
    },
    {
        id: 3,
        title: "Satchel Tote Bags",
        price: "$75.00",
        image: category_3,
        imageAlt: "Burgundy leather tote bag"
    },
    {
        id: 4,
        title: "Kids Summer Set",
        price: "$29.95",
        image: category_4,
        imageAlt: "Kids coral top and cherry shorts set"
    },
    {
        id: 5,
        title: "Utility Backpack",
        price: "$49.95",
        image: category_5,
        imageAlt: "Black multi-pocket utility bag"
    }
];

// 1. Individual Product Card Component
const ProductCard = ({ product }) => {
    return (
        <div className="relative w-[260px] sm:w-[290px] md:w-[310px] h-[350px] bg-[#F2F3F5] flex-shrink-0 overflow-hidden group cursor-grab active:cursor-grabbing select-none">
            
            {/* Product Image Wrapper */}
            <div className="w-full h-full p-6 flex justify-center items-center">
                <img
                    src={product.image}
                    alt={product.imageAlt}
                    draggable="false" 
                    className="max-h-[85%] max-w-[85%] object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Hover Overlay Box */}
            <div className="absolute inset-4 bg-white z-20 flex flex-col justify-center items-center p-6 text-center
                          opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-out
                          group-hover:opacity-100 group-hover:scale-100 shadow-sm">

                <span className="text-gray-500 text-xs md:text-sm font-light mb-1 transform translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
                    From {product.price}
                </span>

                <h3 className="text-lg md:text-xl font-normal text-gray-900 tracking-tight mb-5 transform translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                    {product.title}
                </h3>

                <button className="px-6 py-2 border border-black text-xs font-normal bg-white hover:bg-black hover:text-white transition-colors duration-300 transform translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-150">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// 2. Main Slider Container Component
const ProductSlider = () => {
    const sliderRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Mouse Dragging States
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    // Track scroll positioning for progress bar
    const handleScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll > 0) {
            setScrollProgress((scrollLeft / maxScroll) * 100);
        }
    };

    // Drag Actions
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX);
        setScrollLeftState(sliderRef.current.scrollLeft);
    };

    // Release mouse or drag stop
    const handleMouseLeaveOrUp = () => {
        setIsDown(false);
    };

    // Dynamic Tracking for Moving Mouse
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.clientX;
        const walk = (x - startX) * 2.0; 
        sliderRef.current.scrollLeft = scrollLeftState - walk;
    };

    // Arrow Buttons Scrolling Logic
    const scrollContainer = (direction) => {
        if (!sliderRef.current) return;
        const offset = direction === 'left' ? -320 : 320;
        sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    };

    useEffect(() => {
        const currentSlider = sliderRef.current;
        if (currentSlider) {
            currentSlider.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
        }
        return () => {
            if (currentSlider) currentSlider.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 relative group/section">
            
            {/* --- HEADER SECTION --- */}
            <div className="text-center mb-10 flex flex-col gap-2 select-none">
                <span className="text-[#832B45] text-sm font-medium tracking-wide uppercase">
                    Shop by Category
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#0F1E29] tracking-tight">
                    Popular on the Shofy store.
                </h2>
            </div>

            {/* Left Button - Round with shadow & Dark Blue Hover */}
            <button
                onClick={() => scrollContainer('left')}
                className="absolute left-2 top-[58%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/section:opacity-100 hover:bg-[#0A1D37] hover:text-white hidden md:flex"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>

            {/* Right Button - Round with shadow & Dark Blue Hover */}
            <button
                onClick={() => scrollContainer('right')}
                className="absolute right-2 top-[58%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/section:opacity-100 hover:bg-[#0A1D37] hover:text-white hidden md:flex"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>

            {/* Main Slider Viewport */}
            <div className="w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                    className="flex gap-2 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <style>{`
                        div::-webkit-scrollbar {
                            display: none !important;
                        }
                    `}</style>

                    {productData.map((product) => (
                        <div key={product.id} className="flex-shrink-0">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Progress Bar Indicator */}
            <div className="w-full max-w-xl mx-auto h-[2px] bg-gray-200 mt-8 relative rounded-full">
                <div
                    className="absolute h-full bg-black transition-all duration-150 ease-out rounded-full"
                    style={{
                        width: '35%',
                        left: `${scrollProgress * 0.65}%`
                    }}
                />
            </div>
        </div>
    );
};

export default ProductSlider;