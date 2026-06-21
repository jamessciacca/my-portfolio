import React from "react";

import selfPortrait from "../img/landing-headshot.jpeg";

const aboutSections = [
    {
        title: "What am I up To?",
        content:
            "I just recently started my first role at Robert Wood Johnson Barnabas Health as a Field Analyst in the IT department. I am very eager to build and learn new skills in the healthcare industry. I am also working on a project to create websites for local buisnesses in my area, so if you know any small buisnesses that could use a website, send them my way! I am also always looking for new projects to work on, so if you have any ideas or oppurtunities, please reach out.",
    },
    {
        title: "Outside The Screen",
        content:
            "When I am not working or doing something tech-related, you can find me in the gym, watching the Yankees, or cooking/eating food. I have been lifting weights for 5 years now and it has become one of my biggest passions. The Yankees have always been my favorite team and growing up being a relief pitcher, I loved watching Mariano Rivera close out games. Food is a big part of my life and family cuture, its more than something to keep you full, its a way of showing love and bringing people together. Anytime theres a big accomplishement or celebration in my family, you can be sure there will be a big meal involved.",
    },
    {
        title: "My Faith Journey",
        content:
            "Faith in Jesus Christ has been the most important part of my life and has shaped me into the person I am today. I was raised in a Christian household and have been attending church my whole life. I have been through many ups and downs in my faith journey, but through it all, I have always felt God's presence and guidance. My faith has given me hope, strength, and purpose, and I am grateful for the ways it has impacted my life.",
    },
];

const quickFacts = [
    "Born and raised in New Jersey",
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
