import React from 'react';
import bannerImage_1 from '../assets/images/banner-1.jpg';
import bannerImage_2 from '../assets/images/banner-2.jpg';
import bannerImage_3 from '../assets/images/banner-3.jpg';

// 1. Data Structure with specific background colors matching image_11bc1d.jpg
const bannerData = [
  {
    id: 1,
    title: "T-Shirt Tunic\nTops Blouse",
    imageUrl: bannerImage_1,
    imageAlt: "Stacked tops and blouses",
    bgColor: "bg-[#F5EFF4]", 
    titleColor: "text-[#4A1525]" 
  },
  {
    id: 2,
    title: "Satchel Tote\nCrossbody Bags",
    imageUrl: bannerImage_2,
    imageAlt: "Green leather tote bag",
    bgColor: "bg-[#F1F4F8]", 
    titleColor: "text-[#0F1E29]"
  },
  {
    id: 3,
    title: "Men's Tennis\nWalking Shoes", 
    imageUrl: bannerImage_3,
    imageAlt: "Blue and yellow tennis shoes",
    bgColor: "bg-[#F7F5F2]", 
    titleColor: "text-[#0F1E29]" 
  }
];

// 2. Individual Card Component
const BannerCard = ({ title, bgColor, titleColor, imageUrl, imageAlt }) => {
  return (
    // 'group' class is used to control child animations on parent hover
    <div className={`relative flex items-center px-8 rounded-sm ${bgColor} h-[250px] overflow-hidden w-full cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300`}>
      
      {/* Background Image Container - Covers full box and zooms on hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle dark overlay on hover to keep text legible */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Block - Positioned absolutely above the background image */}
      <div className="relative z-10 flex flex-col justify-center gap-5 text-left w-1/2 h-full">
        {/* Title animation: Moves slightly up on hover */}
        <h2 className={`text-2xl md:text-[26px] font-normal tracking-tight ${titleColor} leading-tight whitespace-pre-line font-serif transition-transform duration-300 group-hover:-translate-y-1`}>
          {title}
        </h2>
        
        {/* Button animation: Subtle scale up on hover */}
        <div>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-black text-xs md:text-sm bg-white/80 backdrop-blur-sm hover:bg-[#7a1533] hover:text-white transition-all duration-300 transform group-hover:scale-105">
            Shop Now 
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. Main Container Component
const PromotionBanners = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Responsive Grid Layout: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {bannerData.map((banner) => (
          <BannerCard 
            key={banner.id}
            title={banner.title}
            bgColor={banner.bgColor}
            titleColor={banner.titleColor}
            imageUrl={banner.imageUrl}
            imageAlt={banner.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default PromotionBanners;