import React from "react";

import selfPortrait from "../img/landing-headshot.jpeg";

const aboutSections = [
    {
        title: "Current Season",
        content:
            "As a recent college graduate I am in the Limbo phase, exploring what I want to pursue professionally and learning as much as I can to prepare for my career. I am working towards certificates in IT and cloud infrastructure, while also applying to a variety of roles in tech to find the right fit and get my foot in the door. My long-term goal is to build a career where I can combine technical skill, communication, and problem-solving. I am especially drawn to IT, infrastructure, and product-minded roles where I can contribute, keep learning, and grow into bigger responsibility over time. ",
    },
    {
        title: "Outside The Screen",
        content:
            "When I am not working or doing something tech-related, you can find me in the gym, watching the Yankees, or cooking/eating food. I have been lifting weights for 5 years now and it has become one of my biggest passions. The Yankees have always been my favorite team and growing up being a relief pitcher, I loved watching Mariano Rivera close out games. Food is a big part of my life and family cuture, its more than something to keep you full, its a way of showing love and bringing people together. Anytime theres a big accomplishement or celebration in my family, you can be sure there will be a big meal involved.",
    },
    {
        title: "My Faith Journey",
        content:
            "Faith to me is paramount in everything I do. I do not worry, I do not fear, and I am not anxious because I know Jesus has a plan for me. Following Jesus has been one of the most challenging things I have done, but the feeling of peace and real joy that comes from it is unmatched. I have always been Christian but I never knew what it meant to surrender to him until now. I work hard to keep my relationship with God at the center of my life and I am sure he will continue to guide me in the right direction as I navigate the next season of life.",
    },
];

const quickFacts = [
    "Christian and Sicilian heritage",
    "Weightlifting and fitness enthusiast",
    "I love eating and trying new foods",
    "Reached top 5% in Warzone Ranked play",
];

function MoreAbout() {
    return (
        <section id="moreAboutPage" className="px-6 py-10 md:px-10">
            <div className="moreabout-shell mx-auto max-w-screen-xl">
                <div className="moreabout-hero">
                    <div className="moreabout-profile-card">
                        <img className="moreabout-portrait" src={selfPortrait} alt="James Sciacca portrait" />
                        <div className="moreabout-header-copy">
                            <p className="moreabout-kicker">Background</p>
                            <h1 className="moreabout-title">More About Me</h1>
                            <p className="moreabout-summary">
                                A more personal side of the portfolio, with room to show personality, milestones, and memories.
                            </p>
                        </div>
                    </div>

                    <aside className="moreabout-quickfacts" style={{ "--stagger": 1 }}>
                        <p className="moreabout-panel-label">Quick Snapshot</p>
                        <div className="moreabout-fact-list">
                            {quickFacts.map((fact) => (
                                <span key={fact} className="moreabout-fact-pill">
                                    {fact}
                                </span>
                            ))}
                        </div>
                    </aside>
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
    );
}

export default MoreAbout;
