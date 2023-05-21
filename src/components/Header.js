//importing react 
import React from "react";
//importing image
import logo from "../img/logo.png";

//creating header function
function Header() {
    return (
        <>
        <section id="header" className="p-4">
        <div className="flex justify-center justify-between items-center">
            {/* Logo Image and Text */}
            <img id='logo' src={logo} alt="JRS Logo" />
            {/* Nav Items */}
            <ul id='navLinks' className="flex items-center">
                <li><a className="nav-link nav-link-ltr" href="">About</a></li>
                {/* added spacing between links */}
                <li className="nav-link nav-link-ltr ml-2 mr-2"><a href="">Projects</a></li>
                <li className="nav-link nav-link-ltr mr-2"><a href="">Contact</a></li>
            </ul>
        </div>
        </section>
        </>
    );
}

//exporting the header
export default Header;