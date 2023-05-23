//importing react 
import React from "react";
//importing image
import logo from "../img/logo.png";

import Resume from "../pdf/Resume2023.pdf";

//creating header function
function Header() {
    return (
        <>
        <section id="header" className="p-4">
        <div className="flex justify-between items-center">
            {/* Logo Image and Text */}
            <img id='headerlogo' src={logo} alt="JRS Logo" />
            {/* Nav Items */}
            <ul id='navLink' className="flex items-center">
                <li className="nav-link nav-link-ltr"><a href="#skillsh1">Skills</a></li>
                <li className="nav-link nav-link-ltr"><a href="#projectSection">Projects</a></li>
                <li className="nav-link nav-link-ltr"><a href="#contactForm">Contact</a></li>
                <li className="nav-link nav-link-ltr"><a href={Resume} target="_blank">Resume</a></li>
            </ul>
        </div>
        </section>
        </>
    );
}

//exporting the header
export default Header;