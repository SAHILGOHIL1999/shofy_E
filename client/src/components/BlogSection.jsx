import React from 'react';
import blog_1 from '../assets/images/blog-1.jpg';
import blog_2 from '../assets/images/blog-2.jpg';
import blog_3 from '../assets/images/blog-3.jpg';

const BLOG_POSTS = [
    {
        id: 1,
        title: "The 'Boomerang' Employees Returning After Quitting",
        date: "14 July, 2023",
        categories: "Fashion, Lift Style, News",
        img: blog_1
    },
    {
        id: 2,
        title: "Fast fashion: How clothes are linked to climate change",
        date: "28 May, 2023",
        categories: "Fashion, Lift Style, News",
        img: blog_2
    },
    {
        id: 3,
        title: "The Sound Of Fashion: Malcolm McLaren Words",
        date: "01 April, 2023",
        categories: "Fashion, Lift Style, News",
        img: blog_3
    }
];

function BlogSection() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {BLOG_POSTS.map((post) => (
                    <article key={post.id} className="group cursor-pointer flex flex-col">
                        <div className="relative aspect-[4/3] w-full bg-[#F5F6F8] overflow-hidden mb-5">
                            <img
                                src={post.img} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-125 group-hover:rotate-[8deg]"
                            />
                            <span className="absolute top-3 right-3 bg-white text-[11px] font-medium text-gray-800 px-3 py-1 shadow-sm rounded-sm z-10">
                                {post.date}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2.5">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.8} 
                                stroke="currentColor" 
                                className="w-3.5 h-3.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.43 1.43 0 002.022 0l4.319-4.319a1.43 1.43 0 000-2.022L9.83 3.658A2.25 2.25 0 009.568 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </svg>
                            <span className="font-light tracking-wide">{post.categories}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-normal text-[#0F1E29] leading-snug tracking-tight group-hover:text-[#8b2252] transition-colors duration-300">
                            {post.title}
                        </h3>

                    </article>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="border border-gray-400 text-[#0F1E29] text-xs font-medium tracking-wide uppercase px-8 py-3 bg-white hover:bg-[#7a1533] hover:text-white transition-all duration-300 rounded-sm shadow-sm">
                    Discover More
                </button>
            </div>

        </div>
    );
}

export default BlogSection;