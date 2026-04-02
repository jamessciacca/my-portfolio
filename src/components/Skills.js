import React, { useEffect, useMemo, useRef, useState } from 'react';

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
    const trackRef = useRef(null);
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1100) {
                setItemsPerView(4);
            } else if (window.innerWidth >= 520) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);

        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(technologySkills.length / itemsPerView)),
        [itemsPerView]
    );

    useEffect(() => {
        setPage((currentPage) => Math.min(currentPage, totalPages - 1));
    }, [totalPages]);

    const goToPage = (nextPage) => {
        setPage(Math.max(0, Math.min(nextPage, totalPages - 1)));
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const handleTouchMove = (event) => {
        touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current <= -45) {
            goToPage(page + 1);
        } else if (touchDeltaX.current >= 45) {
            goToPage(page - 1);
        }
    };

    return (
        <>
            <section id="skillsSection" className='mx-auto max-w-screen-xl px-6 pb-8 md:px-10'>
                <div className="section-heading section-heading-compact">
                    <p className="section-kicker">What I Work With</p>
                    <h1 id='skillsh1' className='section-title'>Skills</h1>
                    <p className="section-intro">
                        Technologies and tools that I used to create, learn, and grow as a developer/IT professional.
                    </p>
                </div>
                <div className="skills-gallery-shell">
                    <div className="skills-gallery-header">
                        <div>
                            <h2 className="skills-subtitle">Core Technologies</h2>
                            <p className="skills-gallery-copy">Swipe through the stack or use the arrows to explore the tools I work with most.</p>
                        </div>
                        <div className="skills-gallery-controls">
                            <button
                                type="button"
                                className="skills-gallery-arrow"
                                onClick={() => goToPage(page - 1)}
                                aria-label="Previous skills"
                                disabled={page === 0}
                            >
                                &#8592;
                            </button>
                            <button
                                type="button"
                                className="skills-gallery-arrow"
                                onClick={() => goToPage(page + 1)}
                                aria-label="Next skills"
                                disabled={page === totalPages - 1}
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>

                    <div
                        className="skills-logo-grid"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            ref={trackRef}
                            className="skills-gallery-track"
                            style={{
                                transform: `translateX(-${page * 100}%)`,
                                "--items-per-view": itemsPerView,
                            }}
                        >
                            {technologySkills.map((skill, index) => (
                                <article key={skill.name} className="skills-logo-card" style={{ "--stagger": index % 6 }}>
                                    <img src={skill.logo} alt={skill.name} />
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="skills-gallery-dots" aria-label="Skills gallery pages">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={`skills-page-${index}`}
                                type="button"
                                className={`skills-gallery-dot ${page === index ? "is-active" : ""}`}
                                onClick={() => goToPage(index)}
                                aria-label={`Go to skills page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <h2 className="skills-subtitle skills-subtitle-secondary">Skill Snapshot</h2>
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
