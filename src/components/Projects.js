import React, { useState } from "react";
import devdirect from "../img/devdirect.png";
import fitnessfusion from "../img/fitnessfusion.png";
import codequiz from "../img/codequiz.png";
import JAT from "../img/JAT.jpg";
import memoji from "../img/memoji.png";
import linuxduck from "../img/linuxduck.jpeg";
import systemTroubleshootingImg from "../img/system-troubleshooting.jpg";
import jamaLogo from "../img/jama-logo.png";
import mlbAnalystLogo from "../img/mlb-analyst.png";
import jwsitesLogo from "../img/jwsites-logo.png";

const projects = [
    {
        category: "Web",
        status: "Live",
        title: "JWSites",
        description: "A production-ready website for offering custom business websites, personal portfolios, hosting, and ongoing support.",
        image: jwsitesLogo,
        imageVariant: "wide",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Resend", "Vercel"],
        highlights: [
            "Built responsive service, pricing, portfolio, and website-concept pages for prospective clients.",
            "Created a validated contact workflow that sends project inquiries through a secure server-side API.",
            "Added SEO metadata, sitemap support, and a production deployment on a custom domain.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/jwsites" },
            { label: "Live Site", href: "https://jwsites.net" },
        ],
    },
    {
        category: "AI",
        status: "In Progress",
        title: "MLB Analyst Model",
        description: "A baseball analytics model for evaluating MLB matchups, team trends, and data-driven game insights.",
        image: mlbAnalystLogo,
        tech: ["Python", "Pandas", "Machine Learning", "APIs", "Data Analysis"],
        highlights: [
            "Collecting and organizing MLB stats to compare teams, pitchers, and recent performance.",
            "Building model logic to identify matchup advantages and support game predictions.",
            "Designing an analyst-style workflow that turns raw baseball data into clear recommendations.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/jamessciacca/MLB-AI-Analyst" }],
    },
    {
        category: "Web",
        status: "Completed",
        title: "JAMA",
        description: "A full-stack monitoring dashboard for checking website uptime, HTTP status, and response times.",
        image: jamaLogo,
        tech: ["React", "JavaScript", "Node.js", "Express", "GitHub Pages", "Render"],
        highlights: [
            "Built a responsive dashboard for live website health checks.",
            "Connected the frontend to an Express API for real-time latency data.",
            "Deployed the frontend and backend across production hosting platforms.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/JAMA" },
            { label: "Live Demo", href: "https://jamessciacca.github.io/JAMA/" },
        ],
    },
    {
        category: "Web",
        status: "Personal Project",
        title: "jamessciacca.com",
        description: "A personal portfolio site for showcasing projects, certifications, technical skills, and experience.",
        image: memoji,
        tech: ["React", "JavaScript", "HTML", "CSS"],
        highlights: [
            "Organized portfolio content into responsive sections and routes.",
            "Refined the visual system for a professional engineering portfolio.",
            "Used GitHub for version control and ongoing updates.",
        ],
    },
    {
        category: "IT",
        status: "Completed",
        title: "System Troubleshooting and Configuration Lab",
        description: "A practical lab focused on diagnosing and resolving common workstation and network issues.",
        image: systemTroubleshootingImg,
        tech: ["Windows", "Networking", "Drivers", "System Configuration"],
        highlights: [
            "Practiced structured troubleshooting across system and network scenarios.",
            "Configured system settings, drivers, and connectivity basics.",
            "Documented repeatable steps for resolving common technical issues.",
        ],
    },
    {
        category: "IT",
        status: "Completed",
        title: "Home Lab Environment",
        description: "A virtualized lab environment for practicing Linux, networking, and basic system administration.",
        image: linuxduck,
        tech: ["Linux", "Virtual Machines", "Networking", "Troubleshooting"],
        highlights: [
            "Set up virtual machines for hands-on infrastructure practice.",
            "Configured IP settings and tested connectivity between systems.",
            "Used networking tools to diagnose system and connection issues.",
        ],
    },
    {
        category: "Software",
        status: "Completed",
        title: "JAT",
        description: "A MERN application built during HackRU to help users track job applications and interview progress.",
        image: JAT,
        tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Auth0"],
        highlights: [
            "Built and shipped a working application during a 24-hour hackathon.",
            "Added application stages, goals, and streak tracking.",
            "Collaborated with a team under tight delivery constraints.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/justbautista/jat" }],
    },
    {
        category: "Software",
        status: "Completed",
        title: "Dev Direct",
        description: "A full-stack networking app designed to help developers connect and collaborate globally.",
        image: devdirect,
        tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        highlights: [
            "Contributed backend server setup, authentication, and API routes.",
            "Supported responsive page styling and front-end implementation.",
            "Worked across the MERN stack in a collaborative codebase.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/Animeet/DevDirect" },
            { label: "Live Demo", href: "https://dev-direct.herokuapp.com/" },
        ],
    },
    {
        category: "Web",
        status: "Completed",
        title: "Fitness Fusion",
        description: "A browser app for finding workouts and motivational content based on user input.",
        image: fitnessfusion,
        tech: ["HTML", "CSS", "JavaScript", "jQuery", "APIs"],
        highlights: [
            "Integrated external APIs for workout and motivational content.",
            "Implemented core JavaScript features for the app flow.",
            "Built responsive front-end screens for a lightweight user experience.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/fitness-fusion-workout-maker" },
            { label: "Live Demo", href: "https://jamessciacca.github.io/fitness-fusion-workout-maker/" },
        ],
    },
    {
        category: "Software",
        status: "Completed",
        title: "SQL Employee Tracker",
        description: "A command-line application for managing departments, roles, and employee records.",
        tech: ["Node.js", "Inquirer", "SQL"],
        highlights: [
            "Designed relational workflows for viewing and updating records.",
            "Practiced SQL queries and command-line application structure.",
            "Created a focused backend-style tool for employee data management.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/jamessciacca/my-portfolio" }],
    },
    {
        category: "Web",
        status: "Completed",
        title: "Coding Quiz",
        description: "A browser-based coding quiz with local score tracking and interactive question flow.",
        image: codequiz,
        tech: ["HTML", "CSS", "JavaScript", "jQuery"],
        highlights: [
            "Built dynamic quiz interactions with DOM manipulation.",
            "Stored score history locally in the browser.",
            "Practiced core front-end logic and user interaction patterns.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/jamessciacca/online-coding-quiz" },
            { label: "Live Demo", href: "https://jamessciacca.github.io/online-coding-quiz/" },
        ],
    },
];

const projectFilters = ["All", "Web", "Software", "IT", "AI"];

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const visibleProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projectSection" className="container mx-auto px-6 pb-10 md:px-10">
            <div className="section-heading section-heading-compact">
                <p className="section-kicker">Selected Work</p>
                <h1 id="projecth1" className="section-title">Selected Projects</h1>
                <p className="section-intro">
                    A collection of software, web, and technical projects that highlight my experience with development, problem-solving, and real-world implementation.
                </p>
            </div>

            <div className="project-filters" aria-label="Filter projects by category">
                {projectFilters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        className={`project-filter ${activeFilter === filter ? "is-active" : ""}`}
                        onClick={() => setActiveFilter(filter)}
                        aria-pressed={activeFilter === filter}
                    >
                        {filter}
                    </button>
                ))}
                <span className="project-filter-count" aria-live="polite">
                    {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
                </span>
            </div>

            <div className="project-grid">
                {visibleProjects.map((project, index) => (
                    <article
                        key={`${project.category}-${project.title}`}
                        className="project-tile"
                        style={{ "--stagger": index % 6 }}
                    >
                        <div className="project-card-topline">
                            <span className="project-badge">{project.category}</span>
                            <span className="project-status">{project.status}</span>
                        </div>

                        <div className="project-header">
                            {project.image ? (
                                <img
                                    className={`project-thumb ${project.imageVariant === "wide" ? "project-thumb-wide" : ""}`}
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                />
                            ) : null}
                            <h2 className="project-title">{project.title}</h2>
                        </div>
                        <p className="project-description">{project.description}</p>

                        <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                            {project.tech.map((tech) => (
                                <li key={tech} className="project-tech-chip">
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        <ul className="project-points">
                            {project.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>

                        {project.links ? (
                            <div className="project-links" aria-label={`${project.title} links`}>
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

            <aside className="projects-in-progress" aria-label="More projects in progress">
                <div className="projects-progress-visual" aria-hidden="true">
                    <span className="projects-progress-node" />
                    <span className="projects-progress-line" />
                    <span className="projects-progress-node" />
                    <span className="projects-progress-line" />
                    <span className="projects-progress-node" />
                </div>
                <div>
                    <p className="projects-progress-kicker">More in progress</p>
                    <p className="projects-progress-copy">
                        New software, IT, and AI automation projects are being built and added here.
                    </p>
                </div>
            </aside>
        </section>
    );
}

export default Projects;
