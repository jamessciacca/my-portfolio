import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import selfPortrait from "../img/portraitpic.PNG";

function MoreAbout () {
    return (
        <>
        <Header />
        <div id='MoreAboutMe' className="flex flex-col p-5">
        <img className='mx-auto' id='selfPortrait' src={selfPortrait} alt="selfPortrait" />
        <h1 className='mx-auto' id='moreH1'>More About Me</h1>
        <br />
        <h3>Current Academic Plans - </h3>
        <p className="mx-auto">I am a college student working to complete my Bachelors Degree in Computer Science. As I continue through college I am working on multiple Web-Development Projects and builds to keep my coding skills sharp! I am also planning on joining clubs next semester at school!</p>
        <br />
        <h3> Personal Activities - </h3>
        <p className="mx-auto">When I'm not at my desk working, I can be found in the gym or with my family. I started going to the gym over 28 months ago and I have not looked back since. I love everything about personal growth and just becoming the best version of myself. Family is at the forefront of everything, they always come first. I love talking to my family and I am blessed to have such a supportive group of people backing me up in everything I do!</p>
        <br />
        <h3>Future Plans- </h3>
        <p className="mx-auto">My plans for the future are simple and as follows. I plan to keep my health as the forefront of everything I do. I plan to work hard to put myself in prosperous positions and open doors to great oppurtunities not just for me but for my family as well. Lastly, I plan to balance my work and personal life so I can be a smiling face to both my work family and actual family!</p>
        </div>
        <Footer />
        </>
    )
}

export default MoreAbout;