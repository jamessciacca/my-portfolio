import React from "react";

import selfPortrait from "../img/landing-headshot.jpeg";

const aboutSections = [
    {
        title: "What Am I Up To?",
        content:
            "I have started a new role as a Project Coordinator at Isos Technology, building on my background in IT and Computer Science. I am excited to grow in project coordination and bring my technical perspective and problem-solving skills to this next step in my career. Alongside my role, I am continuing to create websites for local businesses in my area. If you know a small business that could use a website, or have a project idea or opportunity to share, please reach out!",
    },
    {
        title: "Outside The Screen",
        content:
            "When I am not working or doing something tech-related, you can find me in the gym, watching the Yankees, or cooking/eating food. I have been lifting weights for 5 years now and it has become one of my biggest passions. The Yankees have always been my favorite team and growing up being a relief pitcher, I loved watching Mariano Rivera close out games. Food is a big part of my life and family cuture, its more than something to keep you full, its a way of showing love and bringing people together. Anytime theres a big accomplishement or celebration in my family, you can be sure there will be a big meal involved.",
    },
    {
        title: "My Faith Journey",
        content:
            "Faith has always been an important part of my life and continues to shape who I am both personally and professionally. Growing up in a Christian household gave me a strong foundation, and over the years my faith has grown through both challenges and milestones. It reminds me to approach others with humility, integrity, and compassion, while providing a sense of purpose and perspective in everything I do.",
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
