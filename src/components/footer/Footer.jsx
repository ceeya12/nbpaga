import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for styling
import logo from '../../assets/nbpaga_logo.jpg'; // Replace with the actual path to your logo

function Footer() {
    return (
        <footer className="footer">
            <Container>
                {/* Main Footer Content */}
                <Row className="footer-main">
                    {/* Logo */}
                    <Col md={2} sm={12} className="footer-logo mb-4">
                        <img src={logo} alt="PGA Tour Logo" className="footer-logo-img" />
                    </Col>

                    {/* The Tour Column */}
                    <Col md={2} sm={6} xs={12} className="mb-4">
                        <h5>THE TOUR</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">About</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Careers</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">TPC Network</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Partnerships Column */}
                    <Col md={2} sm={6} xs={12} className="mb-4">
                        <h5>Partnerships</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">Marketing Partners</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Affiliates</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Media</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Advertise</a></li>
                        </ul>
                    </Col>

                    {/* Quick Links Column */}
                    <Col md={2} sm={6} xs={12} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">PGA TOUR LIVE</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Payne Stewart Award</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Fan Council</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Newsletters</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">What's New</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">PGA TOUR Studios</a></li>
                        </ul>
                    </Col>

                    {/* Social Responsibility & Shop Column */}
                    <Col md={2} sm={6} xs={12} className="mb-4">
                        <h5>Social Responsibility</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">Sustainability</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Volunteer</a></li>
                        </ul>
                        <h5 className="mt-3">Shop</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">Fan Shop</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Superstore</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Tickets</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Mastercard Tickets</a></li>
                        </ul>
                    </Col>

                    {/* Apps Column */}
                    <Col md={2} sm={6} xs={12} className="mb-4">
                        <h5>Apps</h5>
                        <ul>
                            <li className="app-link">
                                <img src="https://fakeimg.pl/20x20" alt="App Icon" className="app-icon" />
                                <a href="src/components/footer/Footer.jsx#">PGA TOUR</a>
                            </li>
                            <li className="app-link">
                                <img src="https://fakeimg.pl/20x20" alt="App Icon" className="app-icon" />
                                <a href="src/components/footer/Footer.jsx#">PGA TOUR Vision</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* TOURCAST and Impact */}
                <Row className="tourcast-impact">
                    <Col md={2} sm={6} xs={12} lg={12}>
                        <h5>TOURCAST</h5>
                        <ul>
                            <li><a href="src/components/footer/Footer.jsx#">Impact</a></li>
                        </ul>
                    </Col>
                </Row>

                {/* Footer Bottom */}
                <Row className="footer-bottom">
                    <Col md={6} sm={12} lg={12} xl={12} className="text-md-start text-center">
                        <ul className="footer-links">
                            <li><a href="src/components/footer/Footer.jsx#">Privacy Policy</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Terms of Use</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Accessibility Statement</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Your Privacy Choices</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Cookie Choices</a></li>
                            <li><a href="src/components/footer/Footer.jsx#">Sitemap</a></li>
                        </ul>
                        <p className="copyright d-flex justify-content-center m-2">
                            Copyright © 2025 New Braunfels Pan American Golf Association, Inc. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} sm={12} lg={12} className="text-md-end text-center">
                        <ul className="social-icons">
                            <li><a href="src/components/footer/Footer.jsx#"><i className="fab fa-x-twitter"></i></a></li>
                            <li><a href="src/components/footer/Footer.jsx#"><i className="fab fa-tiktok"></i></a></li>
                            <li><a href="src/components/footer/Footer.jsx#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="src/components/footer/Footer.jsx#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="src/components/footer/Footer.jsx#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;