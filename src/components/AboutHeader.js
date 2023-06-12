//importing react 
import React from "react";
//importing image
import logo from "../img/logo.png";

import Resume from "../pdf/Resume2023.pdf";

//creating header function
function AboutHeader() {
    return (
        <>
        <section id="header" className="p-4">
        <div className="flex justify-between items-center">
            {/* Logo Image and Text */}
            <a href="/">
                <img id='headerlogo' src={logo} alt="JRS Logo" />
            </a>
            {/* Nav Items */}
            <ul id='navLink' className="flex items-center">
                <li className="nav-link nav-link-ltr"><a href='/'>Home</a></li>
                <li className="nav-link nav-link-ltr"><a href={Resume} target="_blank">Resume</a></li>
            </ul>
        </div>
        </section>
        </>
    );
}

//exporting the header
export default AboutHeader;