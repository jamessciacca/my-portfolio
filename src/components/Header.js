//importing react 
import React from "react";
//importing image

//creating header function
function Header() {
    return (
        <>
        <section id="header" className="p-4">
        <div className="flex justify-center justify-between content-center">
            {/* Logo Image and Text */}
            <h1 className="ml-2 text-xl">JS</h1>
            {/* Nav Items */}
            <ul className="flex">
                <li><a href="">About Me</a></li>
                {/* added spacing between links */}
                <li className="ml-2 mr-2"><a href="">Projects</a></li>
                <li className="mr-2"><a href="">Contact Me</a></li>
            </ul>
        </div>
        </section>
        </>
    );
}

//exporting the header
export default Header;