import React from "react";

import selfPortrait from "../img/portraitpic.jpeg";

const aboutSections = [
    {
        title: "Current Academic Plans",
        content:
            "I recently graduated from Rutgers University – New Brunswick with a degree in Computer Science. Throughout my time there, I built a strong foundation in problem-solving, systems, and development, while also realizing that I’m most energized when working with people and real-world applications of technology.",
    },
    {
        title: "Personal Activities",
        content:
            "Outside of tech, I spend a lot of time in the gym and have been consistently training for over three years, gaining over 50 pounds since I started. I enjoy staying active, trying new foods (Italian, Mexican, and Greek are my favorites), and exploring new places. I also like unwinding with friends, whether that’s playing games like Warzone or just going for a drive with music on. My faith is an important part of my life and continues to give me perspective and balance.",
    },
    {
        title: "Future Plans",
        content:
            "My goal is to build a strong career at a great company where I can grow both technically and professionally. I’m especially interested in roles that blend technology with problem-solving and communication, such as IT, infrastructure, or product-focused positions. I want to continue learning, gain hands-on experience, and eventually work my way into a role where I can make meaningful decisions and contribute to impactful projects. Most importantly I want to love what I do and be surrounded by people I enjoy working with.",
    },
];

function MoreAbout () {
    return (
        <>
            <section id="moreAboutPage" className="px-6 py-10 md:px-10">
                <div className="moreabout-shell mx-auto max-w-screen-xl">
                    <div className="moreabout-profile">
                        <img className="moreabout-portrait" src={selfPortrait} alt="James Sciacca portrait" />
                        <div className="moreabout-header-copy">
                            <p className="moreabout-kicker">Background</p>
                            <h1 className="moreabout-title">More About Me</h1>
                            <p className="moreabout-summary">
                                A quick look at who I am, what I enjoy, and where I am headed next.
                            </p>
                        </div>
                    </div>

                    <div className="moreabout-grid">
                        {aboutSections.map((section, index) => (
                            <article key={section.title} className="moreabout-card" style={{ "--stagger": index }}>
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreAbout;
