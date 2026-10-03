//importing react 
import React from "react";
import { Link, useLocation } from "react-router-dom";
//importing image
import memoji from "../img/memoji.png";

//creating header function
function Header({ isMobile = false }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        const savedTheme = window.localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    });
    const isActive = (path) => location.pathname === path;
    const isHashActive = (hash) => location.pathname === "/" && location.hash === hash;

    React.useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname, location.hash]);

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("portfolio-theme", theme);

        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) {
            themeMeta.setAttribute("content", theme === "light" ? "#F5F7FA" : "#0E1116");
        }
    }, [theme]);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const toggleTheme = () => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    const nextThemeLabel = theme === "light" ? "Dark" : "Light";
    const nextThemeIcon = theme === "light" ? "🌙" : "☀️";

    return (
        <>
        <section id="header" className={`p-4 ${isHomePage ? "" : "compact-header"}`}>
        <div className={`header-row flex items-center ${isMobile ? "mobile-header-row" : ""}`}>
            {isMobile ? (
                <Link className="header-brand-link" to="/" aria-label="James Sciacca home">
                    <img className="header-avatar" src={memoji} alt="" aria-hidden="true" />
                    <span className="header-brand-text">James Sciacca</span>
                </Link>
            ) : null}
            {isMobile ? (
                <>
                    <button
                        className="theme-toggle"
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
                        aria-pressed={theme === "light"}
                    >
                        <span aria-hidden="true">{nextThemeIcon}</span>
                    </button>
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
                    <li className={`nav-link nav-link-ltr ${isActive("/projects") ? "active-nav" : ""}`}><Link to="/projects">Projects</Link></li>
                    <li className={`nav-link nav-link-ltr ${isActive("/MoreAboutMe") ? "active-nav" : ""}`}><Link to="/MoreAboutMe">About Me</Link></li>
                    {/* Timeline is on hold.
                    <li className={`nav-link nav-link-ltr ${isActive("/timeline") ? "active-nav" : ""}`}><Link to="/timeline">Timeline</Link></li>
                    */}
                    <li id='contactNav' className={`nav-link nav-link-ltr ${isActive("/contact") ? "active-nav" : ""}`}><Link to="/contact">Contact</Link></li>
                    <li className={`nav-link nav-link-ltr resume-nav ${isActive("/resume") ? "active-nav" : ""}`}><Link to="/resume">Resume</Link></li>
                    <li className="theme-toggle-item">
                        <button
                            className="theme-toggle"
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
                            aria-pressed={theme === "light"}
                        >
                            <span aria-hidden="true">{nextThemeIcon}</span>
                        </button>
                    </li>
                </ul>
            )}
        </div>
        {isMobile && menuOpen ? (
            <div id="mobileMenu" className="mobile-menu">
                <ul className="mobile-menu-list">
                    <li><Link className={isActive("/") && !location.hash ? "mobile-menu-link-active" : ""} to="/">Home</Link></li>
                    <li><Link className={isHashActive("#certificates") ? "mobile-menu-link-active" : ""} to="/#certificates">Certificates</Link></li>
                    <li><Link className={isActive("/projects") ? "mobile-menu-link-active" : ""} to="/projects">Projects</Link></li>
                    <li><Link className={isActive("/MoreAboutMe") ? "mobile-menu-link-active" : ""} to="/MoreAboutMe">About Me</Link></li>
                    {/* Timeline is on hold.
                    <li><Link className={isActive("/timeline") ? "mobile-menu-link-active" : ""} to="/timeline">Timeline</Link></li>
                    */}
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
