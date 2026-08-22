import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faStar, faBagShopping, faEye, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import Product1 from '../assets/images/trending-1.jpg'; 
import Product2 from '../assets/images/trending-2.jpg';
import BannerImg from '../assets/images/trending-banner.jpg'; 

const TrendingArrivals = () => {
    const productListRef = useRef(null);

    const handleScroll = (direction) => {
        if (productListRef.current) {
            const scrollAmount = 350;
            if (direction === 'left') {
                productListRef.current.scrollLeft -= scrollAmount;
            } else {
                productListRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <section className="trending-section">
            <div className="trending-container">
                
                <div className="trending-left-content">
                    <div className="trending-header">
                        <div>
                            <span className="trending-subtitle">More to Discover</span>
                            <h2 className="trending-title">Trending Arrivals</h2>
                        </div>
                        <div className="trending-controls">
                            <button className="tr-control-btn" onClick={() => handleScroll('left')}>
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                            </button>
                            <button className="tr-control-btn" onClick={() => handleScroll('right')}>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>

                    <div className="trending-products-list" ref={productListRef}>
                        
                        {/* Product 1 */}
                        <div className="tr-product-card">
                            <div className="tr-img-wrapper">
                                <img src={Product1} alt="Brown Gown for Women" />
                                <div className="tr-action-buttons">
                                    <button className="action-btn" aria-label="Add to Cart">
                                        <FontAwesomeIcon icon={faBagShopping} />
                                    </button>
                                    <button className="action-btn" aria-label="Quick View">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="action-btn wishlist-btn" aria-label="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span className="tooltip-text">Add To Wishlist</span>
                                    </button>
                                    <button className="action-btn" aria-label="Compare">
                                        <FontAwesomeIcon icon={faCodeCompare} />
                                    </button>
                                </div>
                            </div>
                            <div className="tr-details">
                                <span className="tr-vendor">Whitetails Store</span>
                                <h3 className="tr-p-title">Brown Gown for Women</h3>
                                <div className="tr-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="tr-star" />
                                    ))}
                                </div>
                                <div className="tr-price-row">
                                    <span className="tr-current-price">$340.00</span>
                                    <span className="tr-old-price">$475.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="tr-product-card">
                            <div className="tr-img-wrapper">
                                <img src={Product2} alt="Strip Shirt For Women" />
                                <div className="tr-action-buttons">
                                    <button className="action-btn" aria-label="Add to Cart">
                                        <FontAwesomeIcon icon={faBagShopping} />
                                    </button>
                                    <button className="action-btn" aria-label="Quick View">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="action-btn wishlist-btn" aria-label="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span className="tooltip-text">Add To Wishlist</span>
                                    </button>
                                    <button className="action-btn" aria-label="Compare">
                                        <FontAwesomeIcon icon={faCodeCompare} />
                                    </button>
                                </div>
                            </div>
                            <div className="tr-details">
                                <span className="tr-vendor">Shirt, Green</span>
                                <h3 className="tr-p-title">Strip Shirt For Women (Green)</h3>
                                <div className="tr-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="tr-star" />
                                    ))}
                                </div>
                                <div className="tr-price-row">
                                    <span className="tr-current-price">$145.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="trending-right-banner" style={{ backgroundImage: `url(${BannerImg})` }}>
                    <div className="banner-overlay">
                        <div className="banner-text-content">
                            <h3 className="banner-title">Short Sleeve Tunic<br />Tops Casual Swing</h3>
                            <button className="banner-explore-btn">
                                Explore More <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrendingArrivals;