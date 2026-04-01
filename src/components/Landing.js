//importing react
import React, {useRef} from "react";

//importing memoji image
import memoji from "../img/memoji.png";
import githublogo from "../img/github-mark.png";
import linkedinlogo from "../img/linkedin.png";

//creating landing function
function Landing() {

    return(
        <>
        <section id="landing">
            <div className="max-w-screen-xl p-10 mx-auto">
                <h5 id='intro' className="font-mono text-lg">Hello, my name is</h5>
                <img id='memoji' className='w-1/6 justify-end' src={memoji} alt="Memoji Profile Picture" />
                <h1 id='name' className="font-mono text-8xl mb-5 mt-5 mr-5">James Sciacca</h1>
                <h1 id='fullStack' className="font-mono text-4xl mb-5">Curious Problem Solver</h1>
                <p id='bio' className="font-mono mb-2">Welcome to my website! I’m a Computer Science graduate from Rutgers University who just enjoys working with technology and learning how everything fits together. Whether it’s building something on the front end or understanding how systems and networks operate behind the scenes, I like exploring, learning, and improving a little every day.</p>
                <ul id='socials' className="flex items-center mt-5">
                    <li><a href="#contactForm" id='contactBtn' className="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out mr-2">Contact Me</a></li>
                    <li><a href="/MoreAboutMe" id='contactBtn' className="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">About Me</a></li>
                    <li id='socialLinks' className="ml-2"><a href="https://github.com/jamessciacca" target="_blank"><img src={githublogo} alt="" /></a></li>
                    <li id='socialLinks' className= "ml-2"><a href="https://www.linkedin.com/in/james-sciacca3/" target="_blank"><img src={linkedinlogo} alt="" /></a></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Landing;
