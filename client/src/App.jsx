import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ScrollToTop from "./components/ScrollToTop";
import HeroSlider from './components/HeroSlider';
import BannerSection from './components/BannerSection';
import Category from './components/Category';
import ProductSection from './components/ProductSection';
import FeaturedSection from './components/FeaturedSection';
import TrendingArrivals from './components/TrendingArrivals';
import ReviewSection from './components/ReviewSection';
import BlogSection from './components/BlogSection';
import Instagram from './components/Instagram';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ShopGrid from './page/ShopGrid'; 

const Home = () => (
  <>
    <HeroSlider />
    <BannerSection />
    <Category />
    <ProductSection />
    <FeaturedSection />
    <TrendingArrivals />
    <ReviewSection />
    <BlogSection />
    <Instagram />
  </>
);

const Products = () => <div className="max-w-7xl mx-auto px-6 py-16 text-2xl font-bold">Products Page</div>;
const Coupons = () => <div className="max-w-7xl mx-auto px-6 py-16 text-2xl font-bold">Coupons Page</div>;
const Blog = () => <div className="max-w-7xl mx-auto px-6 py-16 text-2xl font-bold">Blog Page</div>;
const Contact = () => <div className="max-w-7xl mx-auto px-6 py-16 text-2xl font-bold">Contact Page</div>;

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopGrid />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;