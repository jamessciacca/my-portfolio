//importing React
import React from "react";
import logo from "../img/logo.png";
import githublogo from "../img/github-mark.png";
import linkedinlogo from "../img/linkedin.png";

//creating footer function
function Footer() {
    return (
        <>
            <footer id='footer' className="footer flex footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="footer-inner flex justify-center items-center">
                    {/* Logo Image and Text */}
                    <h1 id="footerh1">Copyright © 2023 James Sciacca. All Rights Reserved.</h1>
                    <img id='footerlogo' src={logo} alt="JRS Logo" />
                    {/* Nav Items */}
                    <ul className="footer-social-links flex items-center">
                        <li>
                            <a href="https://github.com/jamessciacca" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <img src={githublogo} alt="GitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/james-sciacca3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <img src={linkedinlogo} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    );
}

export default Footer;
