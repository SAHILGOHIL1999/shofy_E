import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/logo.svg";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div>
                        <div className="logo-wrapper">
                            <img src={Logo} alt="Shofy Logo" className="footer-logo" />
                        </div>
                        <p className="brand-description">
                            We are a team of designers and developers that create high quality WordPress
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '16px' }} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '16px' }} />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '16px' }} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Vimeo">
                                <FontAwesomeIcon icon={faVimeoV} style={{ fontSize: '16px' }} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="column-title">My Account</h3>
                        <ul className="link-list">
                            {['Track Orders', 'Shipping', 'Wishlist', 'My Account', 'Order History', 'Returns'].map((item) => (
                                <li key={item} className="link-item">
                                    <span className="bullet-dot"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="column-title">Information</h3>
                        <ul className="link-list">
                            {['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Latest News', 'Contact Us'].map((item) => (
                                <li key={item} className="link-item">
                                    <span className="bullet-dot"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="column-title">Talk To Us</h3>
                        <p className="contact-sub">Got Questions? Call us</p>
                        <a href="tel:+67041390762" className="phone-number">
                            +670 413 90 762
                        </a>

                        <div className="contact-details">
                            <div className="contact-row">
                                <FontAwesomeIcon icon={faEnvelope} className="icon-gray" style={{ width: '16px' }} />
                                <a href="mailto:shofy@support.com">shofy@support.com</a>
                            </div>
                            <div className="contact-row">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-gray" style={{ width: '16px', marginTop: '3px' }} />
                                <span>79 Sleepy Hollow St.<br />Jamaica, New York 1432</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="bottom-bar">
                    <div>
                        © 2023 All Rights Reserved | HTML Template by{' '}
                        <a href="#" className="themepure-link">Themepure</a>.
                    </div>
                    <div className="payment-methods">
                        <div className="badge paypal">PayPal</div>
                        <div className="badge visa">VISA</div>
                        <div className="badge mastercard">
                            <span className="circle-red"></span>
                            <span className="circle-yellow"></span>
                        </div>
                        <div className="badge stripe">stripe</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;