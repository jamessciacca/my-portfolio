import React from 'react';
import { Link } from 'react-router-dom';

const exploreItems = [
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

function ExploreGrid() {
    return (
        <section id="explore" className="px-6 pb-8 md:px-10">
            <div className="mx-auto max-w-screen-xl">
                <div className="explore-heading">
                    <p className="explore-kicker">Quick Navigation</p>
                    <h2 className="font-mono text-3xl md:text-4xl">Explore My Work</h2>
                    <p className="explore-intro font-mono">
                        Pick any section below to jump straight to what you want to see.
                    </p>
                </div>

                <div className="explore-grid">
                    {exploreItems.map((item, index) => (
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
