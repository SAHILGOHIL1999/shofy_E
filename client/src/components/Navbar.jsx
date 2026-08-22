import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import home_1 from "../assets/images/menu-home-1.jpg";
import home_2 from "../assets/images/menu-home-2.jpg";
import home_3 from "../assets/images/menu-home-3.jpg";
import home_4 from "../assets/images/menu-home-4.jpg";
import home_5 from "../assets/images/menu-home-5.jpg";
import menu_product_1 from "../assets/images/menu-product-img-1.jpg";
import menu_product_2 from "../assets/images/menu-product-img-2.jpg";

// Data for Home Dropdown
const HOME_DROPDOWN_ITEMS = [
  { id: 1, title: "Electronics", img: home_1, path: "/home/electronics" },
  { id: 2, title: "Fashion", img: home_2, path: "/" },
  { id: 3, title: "Beauty", img: home_3, path: "/home/beauty" },
  { id: 4, title: "Jewelry", img: home_4, path: "/home/jewelry" },
  { id: 5, title: "Grocery", img: home_5, path: "/home/grocery" },
];

// Data for Shop Dropdown
const SHOP_PAGES = [
  { title: "Grid Category", path: "/shop/grid-category" },
  { title: "Grid Layout", path: "/shop/grid-layout" },
  { title: "List Layout", path: "/shop/list-layout" },
  { title: "Masonary Layout", path: "/shop/masonary-layout" },
  { title: "Full width Layout", path: "/shop/full-width" },
  { title: "1600px Layout", path: "/shop/1600px-layout" },
  { title: "Left Sidebar", path: "/shop/left-sidebar" },
  { title: "Right Sidebar", path: "/shop/right-sidebar" },
  { title: "Hidden Sidebar", path: "/shop/hidden-sidebar" },
];

const FEATURES = [
  { title: "Filter Dropdown", path: "/shop/filter-dropdown" },
  { title: "Filters Offcanvas", path: "/shop/filters-offcanvas" },
  { title: "Filters Sidebar", path: "/shop/filters-sidebar" },
  { title: "Load More button", path: "/shop/load-more" },
  { title: "Infinit scrolling", path: "/shop/infinite-scrolling" },
  { title: "Collections list", path: "/shop/collections-list" },
  { title: "Hidden search", path: "/shop/hidden-search" },
  { title: "Search Full screen", path: "/shop/search-fullscreen" },
];

const HOVER_STYLES = [
  { title: "Hover Style 1", path: "/shop/hover-1" },
  { title: "Hover Style 2", path: "/shop/hover-2" },
  { title: "Hover Style 3", path: "/shop/hover-3" },
  { title: "Hover Style 4", path: "/shop/hover-4" },
];

// Data for Products Dropdown
const SHOP_PAGE_LINKS = [
  { title: "Only Categories", path: "/shop/only-categories" },
  { title: "Shop Grid", path: "/shop/grid" },
  { title: "Shop Grid with Sideber", path: "/shop/sidebar" },
  { title: "Shop List", path: "/shop/list" },
  { title: "Categories", path: "/shop/categories" },
  { title: "Product Details", path: "/product/details" },
  { title: "Product Details Progress", path: "/product/details-progress" },
];

const PRODUCTS_LINKS = [
  { title: "Product Simple", path: "/product/simple" },
  { title: "With Video", path: "/product/video" },
  { title: "With Countdown Timer", path: "/product/countdown" },
  { title: "Product Presentation", path: "/product/presentation" },
  { title: "Variations Swatches", path: "/product/swatches" },
  { title: "List View", path: "/product/list-view" },
  { title: "Details Gallery", path: "/product/gallery" },
  { title: "With Slider", path: "/product/slider" },
];

const ECOMMERCE_LINKS = [
  { title: "Shopping Cart", path: "/cart" },
  { title: "Track Your Order", path: "/track-order" },
  { title: "Compare", path: "/compare" },
  { title: "Wishlist", path: "/wishlist" },
  { title: "Checkout", path: "/checkout" },
  { title: "My account", path: "/my-account" },
];

const MORE_PAGES_LINKS = [
  { title: "About", path: "/about" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
  { title: "Forgot Password", path: "/forgot-password" },
  { title: "404 Error", path: "/404" },
];

// DATA FOR BLOG DROPDOWN
const BLOG_LINKS = [
  { title: "Blog Standard", path: "/blog/standard" },
  { title: "Blog Grid", path: "/blog/grid" },
  { title: "Blog List", path: "/blog/list" },
  { title: "Blog Details Full Width", path: "/blog/details-full-width" },
  { title: "Blog Details", path: "/blog/details" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `hover:text-[#7a1533] transition-colors py-2 flex items-center gap-1 ${isActive ? "text-[#7a1533] font-bold" : "text-gray-800"
    }`;

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img src={logo} alt="Shofy Logo" className="h-8 sm:h-9 w-auto" />
            </NavLink>
          </div>

          {/* Middle Section: Navigation Links & Mega Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium tracking-wide">

            {/* Home Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer">
              <NavLink to="/" className={navLinkClasses}>
                Home
                <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
              </NavLink>

              <div className="absolute top-full left-0 w-[82vw] max-w-[1150px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                  {HOME_DROPDOWN_ITEMS.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className="group/item flex flex-col items-center text-center p-1 rounded-xl transition"
                    >
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 group-hover/item:border-[#7a1533] group-hover/item:shadow-md">
                        <img
                          src={item.img}
                          alt={`${item.title} Preview`}
                          className="w-full h-full object-cover transition duration-500 group-hover/item:scale-105"
                          onError={(e) => {
                            e.target.src = `https://placehold.co/400x300?text=${item.title}`;
                          }}
                        />
                      </div>
                      <span className="mt-3 block text-sm font-medium text-gray-600 transition duration-200 group-hover/item:text-[#7a1533]">
                        {item.title}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer">
              <NavLink to="/shop" className={navLinkClasses}>
                Shop
                <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
              </NavLink>

              <div className="absolute top-full left-[-150px] w-[85vw] max-w-[1150px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1 transform translate-y-4 group-hover:translate-y-0">
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-3 grid grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Shop Pages</h4>
                      <ul className="space-y-2.5">
                        {SHOP_PAGES.map((link, idx) => (
                          <li key={idx}>
                            <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">{link.title}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Features</h4>
                      <ul className="space-y-2.5">
                        {FEATURES.map((link, idx) => (
                          <li key={idx}>
                            <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">{link.title}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Hover Style</h4>
                      <ul className="space-y-2.5">
                        {HOVER_STYLES.map((link, idx) => (
                          <li key={idx}>
                            <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">{link.title}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="relative group/banner rounded-xl overflow-hidden bg-[#f4f6f9] aspect-[4/5] flex flex-col justify-between items-center p-4">
                      <div className="w-full h-full flex items-center justify-center p-2 mix-blend-multiply">
                        <img src={menu_product_1} alt="Phones promo" className="max-h-[170px] w-auto object-contain transition duration-500 group-hover/banner:scale-105" />
                      </div>
                      <NavLink to="/shop/phones" className="absolute bottom-4 bg-[#7a1533] text-white text-xs font-semibold px-5 py-2 rounded shadow-md hover:bg-[#5e0f26] transition-colors z-10">Phones</NavLink>
                    </div>
                    <div className="relative group/banner rounded-xl overflow-hidden bg-[#f4f6f9] aspect-[4/5] flex flex-col justify-between items-center p-4">
                      <div className="w-full h-full flex items-center justify-center p-2 mix-blend-multiply">
                        <img src={menu_product_2} alt="Cameras promo" className="max-h[170px] w-auto object-contain transition duration-500 group-hover/banner:scale-105" />
                      </div>
                      <NavLink to="/shop/cameras" className="absolute bottom-4 bg-[#7a1533] text-white text-xs font-semibold px-5 py-2 rounded shadow-md hover:bg-[#5e0f26] transition-colors z-10">Cameras</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="relative group flex items-center h-full cursor-pointer">
              <NavLink to="/products" className={navLinkClasses}>
                Products
                <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
              </NavLink>

              <div className="absolute top-full left-1/2 transform -translate-x-1/3 w-[85vw] max-w-[1150px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1">
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div>
                    <h4 className="text-gray-900 font-semibold text-[15px] mb-4 pb-1">Shop Page</h4>
                    <ul className="space-y-3">
                      {SHOP_PAGE_LINKS.map((link, idx) => (
                        <li key={idx}><NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-[14px] font-normal block transition-colors">{link.title}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-[15px] mb-4 pb-1">Products</h4>
                    <ul className="space-y-3">
                      {PRODUCTS_LINKS.map((link, idx) => (
                        <li key={idx}><NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-[14px] font-normal block transition-colors">{link.title}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-[15px] mb-4 pb-1">eCommerce</h4>
                    <ul className="space-y-3">
                      {ECOMMERCE_LINKS.map((link, idx) => (
                        <li key={idx}><NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-[14px] font-normal block transition-colors">{link.title}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-[15px] mb-4 pb-1">More Pages</h4>
                    <ul className="space-y-3">
                      {MORE_PAGES_LINKS.map((link, idx) => (
                        <li key={idx}><NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-[14px] font-normal block transition-colors">{link.title}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/coupons" className={navLinkClasses}>Coupons</NavLink>

            {/* Blog Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer">
              <NavLink to="/blog" className={navLinkClasses}>
                Blog
                <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
              </NavLink>

              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1 text-left">
                <ul className="space-y-1">
                  {BLOG_LINKS.map((link, idx) => (
                    <li key={idx}>
                      <NavLink to={link.path} className="text-gray-600 hover:text-[#7a1533] hover:bg-gray-50 text-[14px] font-normal block px-5 py-2 transition-colors">
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs xl:max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Products..."
                className="w-full bg-[#f3f5f6] text-gray-700 rounded-full py-2.5 pl-5 pr-12 text-[14px] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all placeholder-gray-400"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#7a1533] transition-colors">
                <i className="fas fa-search text-[14px]"></i>
              </button>
            </div>
          </div>

          {/* Right Section Icons & Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4 text-gray-700">
            <button className="hover:text-[#7a1533] p-2 transition-colors relative hidden sm:block" aria-label="Compare products">
              <i className="fas fa-exchange-alt text-[17px]"></i>
            </button>

            <button className="hover:text-[#7a1533] p-2 transition-colors relative" aria-label="Wishlist items">
              <i className="far fa-heart text-[18px]"></i>
              <span className="absolute top-1 right-1 bg-[#7a1533] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">4</span>
            </button>

            <button className="hover:text-[#7a1533] p-2 transition-colors relative" aria-label="Shopping Cart bags">
              <i className="fas fa-shopping-bag text-[17px]"></i>
              <span className="absolute top-1 right-1 bg-[#7a1533] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">13</span>
            </button>

            {/* Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-gray-800 p-2 hover:text-[#7a1533] transition-colors"
              aria-label="Open side menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MOBILE MENU */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Menu Panel drawer */}
        <div className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between pb-5 border-b border-gray-100">
            <img src={logo} alt="Shofy Logo" className="h-7 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-gray-900 p-1">
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Quick Mobile Search */}
          <div className="mt-5 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#f3f5f6] text-gray-700 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:bg-gray-100"
            />
            <i className="fas fa-search absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          </div>

          {/* Nav Links Stack list */}
          <div className="flex-1 overflow-y-auto mt-6 space-y-1 text-[15px] font-medium custom-scrollbar">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Home</NavLink>
            <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Shop</NavLink>
            <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Products</NavLink>
            <NavLink to="/coupons" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Coupons</NavLink>
            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Blog</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#7a1533]">Contact</NavLink>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION BAR FOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] z-40 py-2.5 px-4 flex items-center justify-around md:hidden text-center text-gray-500 font-medium">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 flex-1 text-xs ${isActive ? "text-[#7a1533]" : "text-gray-500"}`}>
          <i className="fas fa-store text-lg"></i>
          <span>Store</span>
        </NavLink>
        <button className="flex flex-col items-center gap-1 flex-1 text-xs text-gray-500">
          <i className="fas fa-search text-lg"></i>
          <span>Search</span>
        </button>
        <NavLink to="/wishlist" className={({ isActive }) => `flex flex-col items-center gap-1 flex-1 text-xs relative ${isActive ? "text-[#7a1533]" : "text-gray-500"}`}>
          <i className="far fa-heart text-lg"></i>
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/my-account" className={({ isActive }) => `flex flex-col items-center gap-1 flex-1 text-xs ${isActive ? "text-[#7a1533]" : "text-gray-500"}`}>
          <i className="far fa-user text-lg"></i>
          <span>Account</span>
        </NavLink>
        <button onClick={() => setIsMobileMenuOpen(true)} className="flex flex-col items-center gap-1 flex-1 text-xs text-gray-500">
          <i className="fas fa-bars text-lg"></i>
          <span>Menu</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;