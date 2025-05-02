import React from "react";

import AboutHeader from "./AboutHeader";
import Footer from "./Footer";

import selfPortrait from "../img/portraitpic.jpeg";
import backgroundIMG from "../img/MoreAboutMe.png"

function MoreAbout () {
    return (
        <>
        <AboutHeader />
        <div style={{ backgroundImage:`url(${backgroundIMG})`}} id='MoreAboutMe' className="flex flex-col p-5">
        <img className='mx-auto mt-10' id='selfPortrait' src={selfPortrait} alt="selfPortrait" />
        <br />
        <div id="aboutDiv">
        <h1 className='mx-auto' id='moreH1'>More About Me</h1>
        <h3>Current Academic Plans - </h3>
        <p className="mx-auto">I am a rising senior at Rutgers University - New Brunswick, pursuing a degree in Computer Science.</p>
        <br />
        <h3> Personal Activities - </h3>
        <p className="mx-auto">When I am away from my desk I love to workout in the gym. I have been working out for over 3 years now and I am up 50 pounds since I started back in 2021. I love being active and playing sports but I will never say no to eating as well. I love trying new restaraunts and places I have never been to before, my top three types of food are Italian, Mexican, and Greek. I enjoy playing some Warzone with my friends at times just to take a break from everyday strss sometimes. Listening to music and going for drives with my windows down is the best stress relief for me, I love the feeling of the breeze and just being able to cool down and listen to my favorite music. Lastly I enjoy going to Church, as a Catholic man I try my best to walk in the light of the Lord, religion and church has given me so much joy and has greatly enhanced my life in ways I can't even comprehend. Well anyways that's a little bit about what I like to do away from my desk!  </p>
        <br />
        <h3>Future Plans- </h3>
        <p className="mx-auto">My plans for the future start with getting an Internship this summer. I would love to be able to learn and broaden my skills in a real world enviroment before graduating from school. I plan to continue working on projects in my free time just to retain the skills I learned and to keep getting better and more creative! I would really like to start a family sooner than later. I pray that I find a job opportunity that can not only support me but also my family in the future. I plan to continue lifting as long as I can just to maintain muscle and a healthy lifestyle. </p>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default MoreAbout;