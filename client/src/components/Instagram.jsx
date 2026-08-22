import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Insta_1 from '../assets/images/insta-1.jpg';
import Insta_2 from '../assets/images/insta-2.jpg';
import Insta_3 from '../assets/images/insta-3.jpg';
import Insta_4 from '../assets/images/insta-4.jpg';
import Insta_Icon from '../assets/images/insta-icon.png';

const instagramImages = [
    { id: 1, src: Insta_1, alt: "Man in trench coat" },
    { id: 2, src: Insta_2, alt: "Woman in white hoodie sitting down" },
    { id: 3, src: Insta_3, alt: "Man in green long sleeve shirt" },
    { id: 4, src: Insta_4, alt: "Woman in brown sweatshirt smiling" },
];

const InstagramSection = () => {
    return (
        <section className="instagram-section">
            <div className="instagram-container">
                <div className="instagram-grid">
                    
                    {/* Image 1 */}
                    <div className="instagram-item">
                        <img src={instagramImages[0].src} alt={instagramImages[0].alt} />
                        <div className="instagram-overlay">
                            <FontAwesomeIcon icon={faInstagram} className="overlay-icon" />
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="instagram-item">
                        <img src={instagramImages[1].src} alt={instagramImages[1].alt} />
                        <div className="instagram-overlay">
                            <FontAwesomeIcon icon={faInstagram} className="overlay-icon" />
                        </div>
                    </div>

                    {/* Center Card */}
                    <div className="instagram-cta-card">
                        <div className="cta-content">
                            <div className="cta-icon-wrapper">
                                <img src={Insta_Icon} alt="Instagram Icon" className="cta-image-icon" />
                            </div>
                            <p className="cta-subtitle">Follow Us on</p>
                            <Link to="/trending-arrivals" className="cta-title">
                                Instagram
                            </Link>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="instagram-item">
                        <img src={instagramImages[2].src} alt={instagramImages[2].alt} />
                        <div className="instagram-overlay">
                            <FontAwesomeIcon icon={faInstagram} className="overlay-icon" />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="instagram-item">
                        <img src={instagramImages[3].src} alt={instagramImages[3].alt} />
                        <div className="instagram-overlay">
                            <FontAwesomeIcon icon={faInstagram} className="overlay-icon" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InstagramSection;