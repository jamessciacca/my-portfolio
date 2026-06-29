//importing react 
import React from "react";

import Resume from "../pdf/ResumeSoftwareDev.pdf";

//creating header function
function AboutHeader() {
    return (
        <>
        <section id="header" className="p-4">
        <div className="flex justify-between items-center">
            <a className="header-brand-link header-brand-link-static" href="/" aria-label="James Sciacca home">
                <span className="header-brand-text">James Sciacca</span>
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
