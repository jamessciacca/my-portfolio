//importing React
import React from "react";
import logo from "../img/logo.png";

//creating footer function
function Footer() {
    return (
        <>
          <footer id='footer' className="footer flex footer-center p-10 bg-base-200 text-base-content rounded">
          <div className="flex justify-center justify-between items-center">
            {/* Logo Image and Text */}
            <h1 id="footerh1">Copyright © 2023 James Sciacca. All Rights Reserved.</h1>
            <img id='logo' src={logo} alt="JRS Logo" />
            {/* Nav Items */}
            <ul id='navLinks' className="flex items-center">
                <li className="nav-link nav-link-ltr"><a href="https://github.com/jamessciacca" target="_blank">Github</a></li>
                <li className="nav-link nav-link-ltr"><a href="https://www.linkedin.com/in/james-sciacca3/" target="_blank">LinkedIn</a></li>
                <li className="nav-link nav-link-ltr"><a href="">Resume</a></li>
            </ul>
        </div>
</footer>

        </>
    );
}

export default Footer;