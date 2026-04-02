//importing react
import React from "react";

//importing memoji image
import memoji from "../img/memoji.png";
import githublogo from "../img/github-mark.png";
import linkedinlogo from "../img/linkedin.png";

//creating landing function
function Landing() {

    return(
        <>
        <section id="landing">
            <div className="landing-shell max-w-screen-xl p-8 md:p-10 mx-auto">
                <div className="landing-copy">
                    <h5 id='intro' className="font-mono text-lg">Hello, my name is</h5>
                    <h1 id='name' className="font-mono">James Sciacca</h1>
                    <h1 id='fullStack' className="font-mono">Rutgers Alumni</h1>
                    <p id='bio' className="font-mono mb-2">Welcome to my website! I am a Computer Science graduate with a passion for problem-solving, networking, and figuring out how things work. If you have any questions or would like to get in touch, feel free to reach out!</p>
                </div>
                <div className="landing-visual">
                    <img id='memoji' src={memoji} alt="Memoji profile" />
                </div>
                <ul id='socials' className="flex items-center mt-5">
                    <li className="landing-cta-item"><a href="#contactForm" id='contactBtn' className="landing-cta-btn text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Contact Me</a></li>
                    <li className="landing-cta-item"><a href="/MoreAboutMe" id='contactBtn' className="landing-cta-btn text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">About Me</a></li>
                    <li id='socialLinks'><a href="https://github.com/jamessciacca" target="_blank" rel="noreferrer"><img src={githublogo} alt="GitHub" /></a></li>
                    <li id='socialLinks'><a href="https://www.linkedin.com/in/james-sciacca3/" target="_blank" rel="noreferrer"><img src={linkedinlogo} alt="LinkedIn" /></a></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Landing;
