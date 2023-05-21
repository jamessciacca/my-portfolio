//importing react
import React from "react";

//creating landing function
function Landing() {
    return(
        <>
        <section>
            <div className="max-w-screen-xl p-10 mx-auto">
                <h5 id='intro' className="font-mono text-lg">Hello, my name is</h5>
                <h1 id='name' className="font-mono text-8xl mb-5 mt-5 mr-5">James Sciacca</h1>
                <h1 id='fullStack' className="font-mono text-4xl mb-5">A Full Stack Web Developer!</h1>
                <p id='bio' className="font-mono mb-2">I specialize in all aspects of web development from front-end coding to back-end database development. My core skills include coding in JavaScript, React, and HTML/CSS. I have a passion for creating innovative, secure, and reliable websites with amazing user experiences. My goal is to use my skills and experience to develop amazing web applications and websites!</p>
                <button id='contactBtn' className="font-mono py-2 px-4 rounded mt-3">Contact Me</button>
            </div>
        </section>
        </>
    );
}

export default Landing;
