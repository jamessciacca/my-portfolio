import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import selfPortrait from "../img/portraitpic.jpeg";
import backgroundIMG from "../img/MoreAboutMe.png"

function MoreAbout () {
    return (
        <>
        <Header />
        <div style={{ backgroundImage:`url(${backgroundIMG})`}} id='MoreAboutMe' className="flex flex-col p-5">
        <img className='mx-auto mt-10' id='selfPortrait' src={selfPortrait} alt="selfPortrait" />
        <br />
        <div id="aboutDiv">
        <h1 className='mx-auto' id='moreH1'>More About Me</h1>
        <h3>Current Academic Plans - </h3>
        <p className="mx-auto">I am a college student working towards completing my B.S. in Computer Science. As a part of my learning experience, I am partaking in multiple web-development projects and builds to hone my coding skills. Additionally, I will be joining clubs at school in the upcoming semester to further learn about computer science and gain new experiences.</p>
        <br />
        <h3> Personal Activities - </h3>
        <p className="mx-auto">When I'm not at my desk working, I can be found spending quality time with my family and/or hitting the gym. I started going to the gym over two years ago and have since become passionate about taking ownership of my health and wellbeing. Going to the gym has not only been a great way to stay active, but it has also been an incredibly powerful and rewarding way to invest in my own self-growth. In addition to going to the gym, family has and always will be a priority to me. Aside from the immense love I get from my family, I am grateful for the support they offer to me in whatever I pursue.</p>
        <br />
        <h3>Future Plans- </h3>
        <p className="mx-auto">My plans for the future include prioritizing my health, taking steps to establish myself professionally and nurturing meaningful relationships with loved ones while balancing my work and personal life. I would also really like to have a bunch of dogs someday! </p>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default MoreAbout;