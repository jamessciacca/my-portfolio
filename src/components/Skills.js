import React from 'react';

import htmllogo from "../img/htmllogo.png";
import csslogo from "../img/csslogo.png";
import jslogo from "../img/jslogo.png";
import reactlogo from "../img/reactlogo.png";
import nodelogo from "../img/nodelogo.png";
import mongodblogo from "../img/mongologo.png";
import tailwindlogo from "../img/tailwindlogo.png";
import javalogo from "../img/javalogo.png";
import terminallogo from "../img/terminallogo.png";
import githublogo from "../img/github-mark.png";

const technologySkills = [
    { name: "HTML", logo: htmllogo },
    { name: "CSS", logo: csslogo },
    { name: "JavaScript", logo: jslogo },
    { name: "React", logo: reactlogo },
    { name: "Node.js", logo: nodelogo },
    { name: "Tailwind", logo: tailwindlogo },
    { name: "Java", logo: javalogo },
    { name: "MongoDB", logo: mongodblogo },
    { name: "Command Line", logo: terminallogo },
    { name: "Git", logo: githublogo },
];

const skillGroups = [
    {
        title: "IT & Technical",
        items: ["Troubleshooting", "Networking fundamentals", "Windows/Linux", "System setup"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "Virtual Machines", "VS Code", "AI tools"],
    },
    {
        title: "Programming & Other",
        items: ["JavaScript", "HTML/CSS", "React", "SQL", "Web Deployment"],
    },
];

//creating skills function
function Skills() {
    return (
        <>
            <hr />
            <h1 id='skillsh1' className='text-center'>Skills</h1>
            <section className='mx-auto max-w-screen-xl px-6 pb-8 md:px-10'>
                <h2 className="skills-subtitle">Core Technologies</h2>
                <div className="skills-logo-grid">
                    {technologySkills.map((skill, index) => (
                        <article key={skill.name} className="skills-logo-card" style={{ "--stagger": index % 6 }}>
                            <img src={skill.logo} alt={skill.name} />
                            <h3>{skill.name}</h3>
                        </article>
                    ))}
                </div>

                <h2 className="skills-subtitle skills-subtitle-secondary">Resume Skills Snapshot</h2>
                <div className='skills-grid'>
                    {skillGroups.map((group, index) => (
                        <article key={group.title} className="skills-category-card" style={{ "--stagger": index }}>
                            <h3 className="skills-category-title">{group.title}</h3>
                            <div className="skills-chip-list">
                                {group.items.map((item) => (
                                    <span key={item} className="skills-chip">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Skills;
