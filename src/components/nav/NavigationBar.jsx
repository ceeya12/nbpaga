import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUser, FaSearch } from 'react-icons/fa';
import WeatherWidget from "../WeatherWidget.jsx"; // For icons
// import NavLink from "react-router-dom";
import nbpagaLogo from "/public/nbpaga_logo.jpg";


function NavigationBar() {
    return (

        <Navbar bg="white" expand="lg" className="sticky-top container-fluid p-2">
            {/* Logo */}
                <Navbar.Brand href="/">
                    <img
                        src={nbpagaLogo} // Ensure this path is correct
                        alt="NBPAGA Logo"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                {/* Toggle for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <WeatherWidget />
                {/* Navigation Links */}
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto align-items-center">

                        {/* Home (Active/Underlined) */}
                        <Nav.Link href="/nbpaga" className="text-dark border-bottom border-dark border-2">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/nbpaga/about-us" className="text-dark">About Us</Nav.Link>
                        <Nav.Link href="/nbpaga/schedule" className="text-dark">Schedule</Nav.Link>
                        <Nav.Link href="/nbpaga/results" className="text-dark">Results</Nav.Link>
                        <Nav.Link href="/nbpaga/board-of-directors" className="text-dark">Board Of Directors</Nav.Link>
                        <Nav.Link href="/nbpaga/articles-of-regulations" className="text-dark">Articles of Regulations</Nav.Link>

                        {/* More Dropdown */}
                        <NavDropdown title="More" id="more-dropdown" className="text-dark">
                            <NavDropdown.Item href="#more1">More Item 1</NavDropdown.Item>
                            <NavDropdown.Item href="#more2">More Item 2</NavDropdown.Item>
                            <NavDropdown.Item href="#more3">More Item 3</NavDropdown.Item>
                        </NavDropdown>

                        {/* Chapters Link */}
                        <Nav.Link href="#tours" className="text-dark">Chapters</Nav.Link>

                        {/* Icons */}
                        <Nav.Link href="#profile">
                            <FaUser className="text-dark" />
                        </Nav.Link>
                        <Nav.Link href="#search">
                            <FaSearch className="text-dark" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    );
}

export default NavigationBar;