import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const milestones = [
    {
        id: 'holmdel', date: '2021', label: 'The beginning', title: 'Holmdel High School',
        text: 'I graduated from Holmdel High School, where I played tennis and was part of the Youth Alliance Club and Computer Science Club.',
        tags: ['Tennis', 'Youth Alliance', 'Computer Science'],
    },
    {
        id: 'college', date: '2022 – 2023', label: 'Finding my path', title: 'Middlesex College',
        text: 'I attended Middlesex College from 2022 to 2023 before continuing my education at Rutgers. This was the start of my college journey.',
        tags: ['Middlesex College', 'Next stop: Rutgers'],
    },
    {
        id: 'bootcamp', date: 'May 2023', label: 'Learning by building', title: 'Rutgers Coding Bootcamp',
        text: 'I completed the Rutgers Coding Bootcamp, adding a new milestone to my education and my growth as a developer.',
        tags: ['Rutgers', 'Coding Bootcamp'],
    },
    {
        id: 'microsoft', date: '2024', label: 'Building a foundation', title: 'A new technical milestone',
        text: 'I completed Microsoft’s Intro to Computer Operating Systems and Security, adding another milestone to my technical education.',
        tags: ['Microsoft', 'Operating Systems & Security'],
    },
    {
        id: 'florence', date: 'November 2025', label: 'Beyond the classroom', title: 'A trip to Florence',
        text: 'I visited Florence, Italy, in November 2025, just before finishing my degree. A travel chapter alongside a big season of change.',
        tags: ['Florence', 'Italy', 'Travel'],
    },
    {
        id: 'rutgers', date: 'December 2025', label: 'The finish line', title: 'Rutgers graduate',
        text: 'After Middlesex, I continued at Rutgers from 2024 through December 2025, graduating with my Computer Science degree. A major milestone in my journey.',
        tags: ['Computer Science', 'Rutgers Alumni'],
    },
    {
        id: 'sicily', date: 'May 2026', label: 'Another place, another chapter', title: 'Off to Sicily',
        text: 'In May 2026, I traveled to Sicily. Another part of Italy became part of my story, before my IT internship began that summer.',
        tags: ['Sicily', 'Italy', 'Travel'],
    },
    {
        id: 'internship', date: 'June – September 2026', label: 'Into the field', title: 'My first IT internship',
        text: 'I started my IT internship at RWJ in June and finished in September, bringing my technical background into a healthcare IT environment.',
        tags: ['IT internship', 'Healthcare'],
    },
    {
        id: 'isos', date: 'September 8, 2026', label: 'Where I am now', title: 'A new chapter at Isos Technology',
        text: 'I joined Isos Technology as a Project Coordinator. This is where I am today, building on my IT background as I grow in project coordination.',
        tags: ['Project Coordinator', 'Isos Technology'], current: true,
    },
];

function Timeline() {
    const storyRef = useRef(null);

    useEffect(() => {
        const story = storyRef.current;
        const rows = Array.from(story.querySelectorAll('.story-step'));
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let observer;
        let frame = 0;

        const updateProgress = () => {
            const rect = story.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - rect.top) / rect.height));
            story.style.setProperty('--story-progress', progress);
            frame = 0;
        };
        const scheduleUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(updateProgress);
        };
        const configureReveal = () => {
            if (observer) observer.disconnect();
            if (motion.matches || !('IntersectionObserver' in window)) {
                story.classList.remove('story-animated');
                return;
            }
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            rows.forEach((row) => {
                if (row.getBoundingClientRect().top < window.innerHeight) row.classList.add('is-revealed');
                else observer.observe(row);
            });
            story.classList.add('story-animated');
        };

        configureReveal();
        updateProgress();
        motion.addEventListener('change', configureReveal);
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        return () => {
            if (observer) observer.disconnect();
            window.cancelAnimationFrame(frame);
            motion.removeEventListener('change', configureReveal);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, []);

    return (
        <section className="story-page" aria-labelledby="story-title">
            <header className="story-intro">
                <p className="story-eyebrow">The story so far / 2021 — today</p>
                <h1 id="story-title">Every chapter<br /><span>led me here.</span></h1>
                <p>From Holmdel to Rutgers to Isos Technology. The turns, milestones, and moments along the way.</p>
                <a className="story-start" href="#holmdel">Follow my story <span aria-hidden="true">↓</span></a>
            </header>

            <div className="story-track" ref={storyRef}>
                <div className="story-rail" aria-hidden="true"><div className="story-rail-fill" /></div>
                <ol className="story-list" aria-label="Education and career timeline">
                {milestones.map((milestone, index) => (
                    <li className={`story-step${milestone.current ? ' story-current' : ''}`} id={milestone.id} key={milestone.id}>
                        <span className="story-node" aria-hidden="true" />
                        <div className="story-date"><span>{milestone.date}</span><small>Chapter {String(index + 1).padStart(2, '0')}</small></div>
                        <article className="story-card">
                            <p className="story-eyebrow">{milestone.current && <span className="story-live" aria-hidden="true" />}{milestone.label}</p>
                            <h2>{milestone.title}</h2>
                            <p className="story-copy">{milestone.text}</p>
                            <ul className="story-tags" aria-label="Highlights">{milestone.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                        </article>
                    </li>
                ))}
                </ol>
            </div>

            <section className="story-life" aria-labelledby="story-life-title">
                <div className="story-section-heading"><p className="story-eyebrow">Beyond the dates</p><h2 id="story-life-title">More of my story.</h2><p>The accomplishments and experiences that matter to me, too.</p></div>
                <div className="story-life-grid">
                    <article className="story-life-card"><span className="story-symbol" aria-hidden="true">↗</span><p className="story-eyebrow">2026 / Certified</p><h3>CompTIA A+</h3><p>A major milestone in my technical growth: earning my CompTIA A+ certification.</p><Link to="/certificates">My certifications <span aria-hidden="true">↗</span></Link></article>
                    <article className="story-life-card"><span className="story-symbol" aria-hidden="true">⌁</span><p className="story-eyebrow">Outside the screen</p><h3>Weightlifting</h3><p>Training is a big part of my life and one of my biggest passions. My accomplishments in the gym belong in this story, too.</p></article>
                </div>
            </section>

            <footer className="story-next">
                <span className="story-next-arrow" aria-hidden="true">↓</span>
                <p className="story-eyebrow">Still writing the next chapter</p>
                <h2>What’s next?</h2>
                <p>Continuing to grow at Isos Technology and working toward CompTIA Network+.</p>
                <span className="story-goal">Network+ · Expected November 2026</span>
                <Link to="/contact">Let’s connect <span aria-hidden="true">↗</span></Link>
            </footer>
        </section>
    );
}

export default Timeline;
