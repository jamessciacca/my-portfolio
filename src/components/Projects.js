import React from "react";
import devdirect from "../img/devdirect.png";
import petroasting from "../img/petroasting.png";
import fitnessfusion from "../img/fitnessfusion.png";
import sqlproject from "../img/sqlproject.png";
import codequiz from "../img/codequiz.png";
import JAT from "../img/JAT.jpg";
import memoji from "../img/memoji.png";
import linuxduck from "../img/linuxduck.jpeg";
import systemTroubleshootingImg from "../img/system-troubleshooting.jpg";
import jamaLogo from "../img/jama-logo.png";

const resumeProjects = [
    {
        source: "Resume",
        title: "JAMA",
        date: "April 2026",
        stack: "React (Vite), JavaScript, CSS, Node.js, Express, CORS, GitHub Pages, Render",
        image: jamaLogo,
        points: [
            "Built a full-stack monitoring dashboard to check website availability, HTTP status, and response times in a clean interface.",
            "Connected a React frontend to an Express API that performs live health checks and returns real-time latency data.",
            "Deployed the frontend on GitHub Pages and the backend on Render to demonstrate end-to-end delivery across platforms.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/JAMA" },
            { label: "Live", href: "https://jamessciacca.github.io/JAMA/" },
        ],
    },
    {
        source: "Resume",
        title: "jamessciacca.com",
        date: "May 2023 - Present",
        stack: "React, JavaScript, HTML/CSS",
        image: memoji,
        points: [
            "Built a personal website to showcase projects, certifications, and experience.",
            "Created a clean and responsive design using React and basic front-end tools.",
            "Used GitHub to manage updates and keep the project organized.",
        ],
    },
    {
        source: "Resume",
        title: "System Troubleshooting and Configuration Lab",
        date: "January 2026",
        stack: "Windows, Networking",
        image: systemTroubleshootingImg,
        points: [
            "Practiced diagnosing and resolving common system and network issues.",
            "Configured system settings, drivers, and basic network connections.",
            "Applied structured troubleshooting steps to identify and fix technical problems.",
        ],
    },
    {
        source: "Resume",
        title: "Home Lab Environment",
        date: "February 2026",
        stack: "Linux, Virtual Machines, Networking",
        image: linuxduck,
        points: [
            "Set up virtual machines to practice working with Linux systems and networking.",
            "Configured IP settings and tested connectivity between systems.",
            "Used basic networking tools to troubleshoot connection and system issues.",
        ],
    },
];

const legacyProjects = [
    {
        source: "Portfolio",
        title: "JAT (HACKRU)",
        date: "HackRU 2023",
        stack: "MongoDB, Express.js, React.js, Node.js, TailwindCSS, Auth0",
        image: JAT,
        points: [
            "Built in 24 hours during HackRU to track job applications and interview stages.",
            "Added goals and streak tracking to encourage consistent applications.",
            "Collaborated as a team to ship a full working MERN application under hackathon time pressure.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/justbautista/jat" }],
    },
    {
        source: "Portfolio",
        title: "Dev Direct",
        date: "2023",
        stack: "HTML, CSS, React, Node.js, Express.js, MongoDB",
        image: devdirect,
        points: [
            "Full stack MERN app for developers to connect and network globally.",
            "Implemented backend server setup, authentication, and API routes.",
            "Contributed to CSS styling and responsive behavior.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/Animeet/DevDirect" },
            { label: "Live", href: "https://dev-direct.herokuapp.com/" },
        ],
    },
    {
        source: "Portfolio",
        title: "Pet Roasting App",
        date: "2023",
        stack: "Handlebars, CSS, Node.js, Express.js, SQL",
        image: petroasting,
        points: [
            "Created a fun social app for uploading pet photos with roast captions.",
            "Led page styling and responsive design implementation.",
            "Assisted backend development and integration when needed.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/MegMathis/Pet_Roasting_App" },
            { label: "Live", href: "https://pet-roasting-app.herokuapp.com/" },
        ],
    },
    {
        source: "Portfolio",
        title: "Fitness Fusion",
        date: "2023",
        stack: "HTML, CSS, JavaScript, jQuery, Tailwind",
        image: fitnessfusion,
        points: [
            "Workout finder app powered by user input and external APIs.",
            "Integrated APIs for workout data and motivational quotes.",
            "Implemented core JavaScript features to make the app functional.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/fitness-fusion-workout-maker" },
            { label: "Live Site", href: "https://jamessciacca.github.io/fitness-fusion-workout-maker/" },
        ],
    },
    {
        source: "Portfolio",
        title: "SQL Employee Tracker",
        date: "2023",
        stack: "Node.js, Inquirer, SQL",
        image: sqlproject,
        points: [
            "CLI application to manage departments, roles, and employees.",
            "Built relational workflow for viewing, adding, and updating records.",
            "Designed around practical SQL query usage.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/jamessciacca/my-portfolio" }],
    },
    {
        source: "Portfolio",
        title: "Coding Quiz",
        date: "2023",
        stack: "HTML, CSS, JavaScript, jQuery",
        image: codequiz,
        points: [
            "Browser-based coding quiz with local storage score tracking.",
            "One of the first JavaScript-heavy projects in your portfolio.",
            "Focused on DOM manipulation and interactive quiz flow.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/online-coding-quiz" },
            { label: "Live Site", href: "https://jamessciacca.github.io/online-coding-quiz/" },
        ],
    },
];

function Projects() {
    const allProjects = [...resumeProjects, ...legacyProjects];

    return (
        <>
            <section id="projectSection" className="container mx-auto px-6 pb-10 md:px-10">
                <div className="section-heading section-heading-compact">
                    <p className="section-kicker">Selected Work</p>
                    <h1 id="projecth1" className="section-title">Projects</h1>
                    <p className="section-intro">
                        A combination of portfolio builds, coursework, and hands-on technical labs.
                    </p>
                </div>
                <div className="project-grid">
                    {allProjects.map((project, index) => (
                        <article key={project.title} className="project-tile" style={{ "--stagger": index % 6 }}>
                            <div className="project-preview-box">
                                {project.image ? (
                                    <img className="project-preview" src={project.image} alt={`${project.title} preview`} />
                                ) : (
                                    <span className="project-preview-placeholder">No image</span>
                                )}
                            </div>
                            <div className="project-header">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-date">{project.date}</p>
                            </div>
                            <p className="project-stack">{project.stack}</p>
                            <ul className="project-points">
                                {project.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                            {project.links ? (
                                <div className="project-links">
                                    {project.links.map((link) => (
                                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
