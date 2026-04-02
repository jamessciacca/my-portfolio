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
    const isHashActive = (hash) => location.pathname === "/" && location.hash === hash;

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
                <>
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
                </>
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
                    <li><Link className={isActive("/") && !location.hash ? "mobile-menu-link-active" : ""} to="/">Home</Link></li>
                    <li><Link className={isHashActive("#certificates") ? "mobile-menu-link-active" : ""} to="/#certificates">Certificates</Link></li>
                    <li><Link className={isActive("/projects") ? "mobile-menu-link-active" : ""} to="/projects">Projects</Link></li>
                    <li><Link className={isActive("/skills") ? "mobile-menu-link-active" : ""} to="/skills">Skills</Link></li>
                    <li><Link className={isActive("/MoreAboutMe") ? "mobile-menu-link-active" : ""} to="/MoreAboutMe">About Me</Link></li>
                    <li><Link className={isHashActive("#contactForm") ? "mobile-menu-link-active" : ""} to="/#contactForm">Contact</Link></li>
                    <li><Link className={isActive("/resume") ? "mobile-menu-link-active" : ""} to="/resume">Resume</Link></li>
                </ul>
            </div>
        ) : null}
        </section>
        </>
    );
}

//exporting the header
export default Header;
