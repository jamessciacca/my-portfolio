import React from 'react';
import { Link } from 'react-router-dom';

const defaultExploreItems = [
    {
        title: 'Certificates',
        description: 'Professional credentials and completed programs.',
        href: '/certificates',
        tag: 'Credentials',
    },
    {
        title: 'Skills',
        description: 'Tech stack and tools I use to build products.',
        href: '/skills',
        tag: 'Toolkit',
    },
    {
        title: 'Projects',
        description: 'Real builds with outcomes, code, and demos.',
        href: '/projects',
        tag: 'Portfolio',
    },
    {
        title: 'About Me',
        description: 'My story, growth mindset, and interests.',
        href: '/MoreAboutMe',
        tag: 'Background',
    },
    {
        title: 'Contact',
        description: 'Reach out for opportunities and collaboration.',
        href: '/contact',
        tag: 'Connect',
    },
    {
        title: 'Resume',
        description: 'Open my latest resume and download a copy.',
        href: '/resume',
        tag: 'PDF',
    },
];

function ExploreGrid({
    items = defaultExploreItems,
    sectionId = "explore",
    title = "Explore My Work",
    kicker = "Quick Navigation",
    intro = "Pick any section below to jump straight to what you want to see.",
    compact = false,
}) {
    return (
        <section id={sectionId} className={`px-6 pb-8 md:px-10 ${compact ? "explore-compact" : ""}`}>
            <div className="mx-auto max-w-screen-xl">
                <div className="explore-heading">
                    <p className="explore-kicker">{kicker}</p>
                    <h2 className="font-mono text-3xl md:text-4xl">{title}</h2>
                    <p className="explore-intro font-mono">
                        {intro}
                    </p>
                </div>

                <div className="explore-grid">
                    {items.map((item, index) => (
                        <Link
                            key={item.title}
                            to={item.href}
                            className="explore-card"
                            style={{ "--stagger": index }}
                        >
                            <span className="explore-tag">{item.tag}</span>
                            <h3 className="explore-title">{item.title}</h3>
                            <p className="explore-description">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExploreGrid;
