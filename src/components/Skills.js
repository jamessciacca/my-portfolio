import React from 'react';

const skillGroups = [
    {
        title: "Enterprise IT",
        items: [
            "Windows 10/11",
            "Windows Server",
            "Active Directory",
            "Microsoft 365",
            "Hardware Troubleshooting",
            "Imaging",
            "Ticketing Systems",
            "Remote Support",
        ],
    },
    {
        title: "Software Development",
        items: ["Java", "Python", "JavaScript", "React", "Node.js", "HTML", "CSS", "SQL"],
    },
    {
        title: "Cloud & DevOps",
        items: ["Git", "GitHub", "Docker", "Azure", "Linux", "VS Code"],
    },
    {
        title: "AI & Automation",
        items: [
            "OpenAI APIs",
            "Prompt Engineering",
            "AI Automation",
            "LLM Integration",
            "Workflow Automation",
        ],
    },
    {
        title: "Hardware & Systems",
        items: [
            "PC Building",
            "Component Troubleshooting",
            "Networking Equipment",
            "Enterprise Deployments",
            "Peripheral Support",
        ],
    },
];

const currentlyBuilding = [
    "Network Fundamentals",
    "TCP/IP",
    "OSI Model",
    "Subnetting",
    "DNS & DHCP",
    "Routing & Switching",
    "Wireless Networking",
    "Network Security",
    "Network Troubleshooting",
    "ServiceNow",
    "Incident Management",
    "Asset Management",
    "Endpoint Support",
    "Remote Support Tools",
    "Documentation & Knowledge Base",
];

function Skills() {
    return (
        <section id="skillsSection" className="mx-auto max-w-screen-xl px-6 pb-8 md:px-10" aria-labelledby="skillsh1">
            <div className="section-heading section-heading-compact">
                <p className="section-kicker">What I Work With</p>
                <h1 id="skillsh1" className="section-title">Technologies I&apos;ve Worked With</h1>
                <p className="section-intro">
                    A practical overview of the tools, platforms, and technical areas I&apos;ve used across IT support, software development, web projects, and personal learning.
                </p>
            </div>

            <div className="skills-grid" aria-label="Technology experience categories">
                {skillGroups.map((group, index) => (
                    <article key={group.title} className="skills-category-card" style={{ "--stagger": index }}>
                        <h2 className="skills-category-title">{group.title}</h2>
                        <ul className="skills-chip-list" aria-label={`${group.title} technologies`}>
                            {group.items.map((item) => (
                                <li key={item} className="skills-chip">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <section className="skills-building-card" aria-labelledby="currently-building-title">
                <div className="skills-building-copy">
                    <p className="section-kicker">In Progress</p>
                    <h2 id="currently-building-title" className="skills-subtitle">Currently Building On</h2>
                </div>
                <ul className="skills-chip-list skills-building-list">
                    {currentlyBuilding.map((item) => (
                        <li key={item} className="skills-chip skills-chip-current">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default Skills;
