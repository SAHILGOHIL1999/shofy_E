import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import ClothingImg from '../assets/images/product-slider-1.jpg';
import ShoesImg from '../assets/images/product-slider-2.jpg';
import BagsImg_1 from '../assets/images/product-slider-3.jpg';
import BagsImg_2 from '../assets/images/product-slider-4.jpg';
import Jacket from '../assets/images/product-slider-5.jpg';

const FeaturedSection = () => {
    const sliderRef = useRef(null);

    const handleScroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 600; 
            if (direction === 'left') {
                sliderRef.current.scrollLeft -= scrollAmount;
            } else {
                sliderRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <section className="featured-section">
            <div className="featured-container">

                <span className="section-subtitle">Shop by Category</span>
                <h2 className="section-title">This Week's Featured</h2>

                <div className="banners-grid" ref={sliderRef}>

                    {/* Card 1: Clothing */}
                    <div className="featured-card">
                        <div className="card-info">
                            <h3 className="card-title">Clothing<br />Collection 2023</h3>
                            <div className="card-price">
                                <span className="current-price">$102.00</span>
                                <span className="old-price">$226.00</span>
                            </div>
                            <div className="card-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </div>
                            <button className="shop-now-btn">
                                Shop Now <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
                            </button>
                        </div>
                        <div className="card-image-wrapper">
                            <img src={ClothingImg} alt="Clothing Collection" className="featured-product-img" />
                        </div>
                    </div>

                    {/* Card 2: Shoes */}
                    <div className="featured-card">
                        <div className="card-info">
                            <h3 className="card-title">Non Slip Athletic<br />Tennis Walking</h3>
                            <div className="card-price">
                                <span className="current-price">$220.00</span>
                                <span className="old-price">$350.00</span>
                            </div>
                            <div className="card-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </div>
                            <button className="shop-now-btn">
                                Shop Now <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
                            </button>
                        </div>
                        <div className="card-image-wrapper">
                            <img src={ShoesImg} alt="Athletic Shoes" className="featured-product-img" />
                        </div>
                    </div>

                    {/* Card 3: Bags */}
                    <div className="featured-card">
                        <div className="card-info">
                            <h3 className="card-title">Vera Bradely<br />Straw Tote Bag</h3>
                            <div className="card-price">
                                <span className="current-price">$46.00</span>
                                <span className="old-price">$96.00</span>
                            </div>
                            <div className="card-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </div>
                            <button className="shop-now-btn">
                                Shop Now <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
                            </button>
                        </div>
                        <div className="card-image-wrapper">
                            <img src={BagsImg_1} alt="Toe Bag" className="featured-product-img" />
                        </div>
                    </div>

                    {/* Card 4: Bags */}
                    <div className="featured-card">
                        <div className="card-info">
                            <h3 className="card-title">Gucci Women's<br />Black Leather Bag</h3>
                            <div className="card-price">
                                <span className="current-price">$102.00</span>
                                <span className="old-price">$226.00</span>
                            </div>
                            <div className="card-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </div>
                            <button className="shop-now-btn">
                                Shop Now <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
                            </button>
                        </div>
                        <div className="card-image-wrapper">
                            <img src={BagsImg_2} alt="Leather Bag" className="featured-product-img" />
                        </div>
                    </div>

                    {/* Card 5: Jacket */}
                    <div className="featured-card">
                        <div className="card-info">
                            <h3 className="card-title">Mens Jacket<br />Premium Cotton</h3>
                            <div className="card-price">
                                <span className="current-price">$45.00</span>
                                <span className="old-price">$98.00</span>
                            </div>
                            <div className="card-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </div>
                            <button className="shop-now-btn">
                                Shop Now <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
                            </button>
                        </div>
                        <div className="card-image-wrapper">
                            <img src={Jacket} alt="Premium Cotton" className="featured-product-img" />
                        </div>
                    </div>

                </div>

                <div className="slider-controls">
                    <button className="control-btn" onClick={() => handleScroll('left')} aria-label="Previous slide">
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </button>
                    <button className="control-btn" onClick={() => handleScroll('right')} aria-label="Next slide">
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;