//importing react 
import React from "react";
import { Link, useLocation } from "react-router-dom";
//importing image
import logo from "../img/logo.png";

//creating header function
function Header({ isMobile = false }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [menuOpen, setMenuOpen] = React.useState(false);
    const isActive = (path) => location.pathname === path;

    React.useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname, location.hash]);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <>
        <section id="header" className={`p-4 ${isHomePage ? "" : "compact-header"}`}>
        <div className={`header-row flex items-center ${isMobile ? "mobile-header-row" : ""}`}>
            {/* Logo Image and Text */}
            <Link className="header-logo-link" to="/">
                <img id='headerlogo' src={logo} alt="JRS Logo" />
            </Link>
            {isMobile ? (
                <button
                    className={`hamburger-btn ${menuOpen ? "is-open" : ""}`}
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-controls="mobileMenu"
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            ) : (
                <ul id='navLink' className="flex items-center">
                    <li className={`nav-link nav-link-ltr ${isActive("/") ? "active-nav" : ""}`}><Link to="/">Home</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/certificates") ? "active-nav" : ""}`}><Link to="/certificates">Certificates</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/skills") ? "active-nav" : ""}`}><Link to="/skills">Skills</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/projects") ? "active-nav" : ""}`}><Link to="/projects">Projects</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/MoreAboutMe") ? "active-nav" : ""}`}><Link to="/MoreAboutMe">About Me</Link></li>
                    <li id='contactNav' className={`nav-link nav-link-ltr ${isActive("/contact") ? "active-nav" : ""}`}><Link to="/contact">Contact</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/resume") ? "active-nav" : ""}`}><Link to="/resume">Resume</Link></li>
                </ul>
            )}
        </div>
        {isMobile && menuOpen ? (
            <div id="mobileMenu" className="mobile-menu">
                <ul className="mobile-menu-list">
                    <li><a href="/#certificates">Certificates</a></li>
                    <li><a href="/#skillsh1">Skills</a></li>
                    <li><a href="/#projectSection">Projects</a></li>
                    <li><a href="/#contactForm">Contact</a></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/MoreAboutMe">About Me</Link></li>
                </ul>
            </div>
        ) : null}
        </section>
        </>
    );
}

//exporting the header
export default Header;
