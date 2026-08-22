import React, { useState, useEffect } from 'react';
import silder_1 from '../assets/images/slider-1.png';
import silder_2 from '../assets/images/slider-2.png';
import silder_3 from '../assets/images/slider-3.png'; 
// 1. Centralized Slider Data array for clean maintainability and scalability
const SLIDES_DATA = [
    {
        id: 1,
        tagline: "New Arrivals 2026",
        title: <>The Clothing <br /> Collection</>,
        btnText: "Shop Collection",
        img: silder_1,
        bgCircle: "bg-[#bce3e9]"
    },
    {
        id: 2,
        tagline: "Summer Essentials",
        title: <>Trending Minimalist <br /> Outfits</>,
        btnText: "Explore Now",
        img: silder_2,
        bgCircle: "bg-[#fbd3e9]"
    },
    {
        id: 3,
        tagline: "Exclusive Deals",
        title: <>Upgrade Your <br /> Daily Style</>,
        btnText: "Get 20% Off",
        img: silder_3,
        bgCircle: "bg-[#ffe0b3]"
    }
];

function HeroSlider() {
    // 2. Track the currently visible slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // 3. Setup auto-play carousel cycle tracking
    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
        }, 6000);

        return () => clearInterval(autoPlayTimer);
    }, [currentSlide]);

    const activeSlide = SLIDES_DATA[currentSlide];

    return (
        <div className="bg-[#f0f2f2] min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-12">

                {/* Left Side: Content Box Group (Re-renders with transition animations on change) */}
                <div key={`text-${activeSlide.id}`} className="space-y-6 animate-fade-in z-10 cursor-pointer">
                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-600">
                        {activeSlide.tagline}
                    </p>
                    <h1 className="text-5xl md:text-7xl leading-tight font-light text-gray-900">
                        {activeSlide.title}
                    </h1>
                    <button className="bg-black text-white px-10 py-4 font-medium rounded hover:bg-[#7a1533] transition duration-300 shadow-md">
                        {activeSlide.btnText}
                    </button>
                </div>

                {/* Right Side: Imagery Showcase Graphics Display */}
                <div className="relative flex justify-center items-center h-96 md:h-[500px]">
                    {/* Dynamic Background Circle Accent Blob */}
                    <div className={`w-72 h-72 md:w-96 md:h-96 ${activeSlide.bgCircle} rounded-full absolute transition-colors duration-700 ease-in-out`}></div>

                    {/* Main Cutout Display Product Showcase Image */}
                    <img
                        key={`img-${activeSlide.id}`}
                        src={activeSlide.img}
                        alt="Fashion Model Showcase Collection"
                        className="relative z-10 max-h-full object-contain animate-fade-in"
                    />
                </div>
            </div>

            {/* 4. Manual Slide Dot Navigational Floating Controllers */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {SLIDES_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-black' : 'w-2.5 bg-gray-300 hover:bg-gray-400 cursor-pointer'
                            }`}
                        aria-label={`Jump directly to portfolio frame slide banner ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSlider;