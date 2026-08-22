import React, { useState, useEffect } from 'react';
import user_1 from '../assets/images/user-2.jpg';
import user_2 from '../assets/images/user-3.jpg';
import user_3 from '../assets/images/user-4.jpg';

const REVIEWS = [
    {
        id: 1,
        text: "How you use the city or town name is up to you. All results may be freely used in any work.",
        author: "Theodore Handle",
        role: "CO Founder",
        img: user_1,
        stars: 5
    },
    {
        id: 2,
        text: "Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
        author: "Shahnewz Sakil",
        role: "UI/UX Designer",
        img: user_2,
        stars: 5
    },
    {
        id: 3,
        text: "Thanks for all your efforts and teamwork over the last several months! Thank you so much",
        author: "James Dopli",
        role: "Developer",
        img: user_3,
        stars: 5
    }
];

function ReviewSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Automatic slider rotation interval (5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentReview = REVIEWS[activeIndex];

    // Manual slider navigation handlers
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    };

    return (
        <div className="bg-[#F4F7F9] py-20 relative overflow-hidden flex items-center justify-center min-h-[450px] select-none">
            <div className="absolute top-12 bottom-0 w-[600px] md:w-[700px] rounded-t-full bg-[#EAF1F7] pointer-events-none left-1/2 -translate-x-1/2 z-0"></div>

            {/* Main Wrapper Container */}
            <div className="max-w-5xl w-full mx-auto relative z-10 px-4 flex items-center justify-between">

                {/* Left Navigation Arrow */}
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 transform active:scale-95 shrink-0"
                    aria-label="Previous review"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* Testimonial Content Dynamic Container */}
                <div className="max-w-2xl mx-auto text-center px-4 flex flex-col items-center">

                    {/* Section Label */}
                    <p className="text-[#0F1E29] opacity-80 font-normal tracking-wide text-sm md:text-base mb-4">
                        The Review Are In
                    </p>

                    {/* Deep Burgundy/Maroon Rating Stars */}
                    <div className="flex justify-center gap-1.5 text-xl text-[#5F1224] mb-6">
                        {[...Array(currentReview.stars)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>

                    {/* Main Quote Content */}
                    <h3 className="text-xl sm:text-2xl md:text-[28px] leading-snug font-normal text-[#0F1E29] max-w-2xl min-h-[90px] px-2 transition-all duration-500">
                        “{currentReview.text}”
                    </h3>

                    {/* Author Profile Capsule Pill Badge */}
                    <div className="bg-white rounded-full pl-2 pr-8 py-2 flex items-center gap-3.5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-gray-100/80 mt-8 transform hover:scale-[1.02] transition-transform duration-300">
                        <img
                            src={currentReview.img}
                            alt={currentReview.author}
                            className="w-11 h-11 rounded-full object-cover shadow-inner"
                        />
                        <div className="text-left leading-tight">
                            <p className="font-bold text-gray-900 text-sm md:text-base tracking-wide">{currentReview.author}</p>
                            <p className="text-[11px] md:text-xs text-gray-400 font-medium mt-0.5">{currentReview.role}</p>
                        </div>
                    </div>

                </div>

                {/* Right Navigation Arrow */}
                <button
                    onClick={handleNext}
                    className="w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 transform active:scale-95 shrink-0"
                    aria-label="Next review"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>

            </div>
        </div>
    );
}

export default ReviewSection;