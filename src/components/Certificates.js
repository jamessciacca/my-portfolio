import React, { useEffect, useRef, useState } from 'react';

const certificates = [
    {
        title: 'CompTIA A+ Certified',
        issuer: 'CompTIA',
        category: 'Core IT',
        year: '2026',
        logo: '/cert-logos/comptia-a-plus.webp',
        logoAlt: 'CompTIA A+ certification logo',
    },
    {
        title: 'CompTIA Network+',
        issuer: 'CompTIA',
        category: 'Security',
        year: 'Expected Apr 2026',
        logo: '/cert-logos/comptia-network-plus.png',
        logoAlt: 'CompTIA Network+ certification logo',
    },
    {
        title: 'Intro to Computer Operating Systems and Security',
        issuer: 'Microsoft',
        category: 'Operating Systems',
        year: '2024',
        logo: '/cert-logos/microsoft-logo.jpg',
        logoAlt: 'Microsoft logo',
    },
];

function Certificates() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <hr />
            <section id="certificates" ref={sectionRef} className="px-6 py-10 md:px-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="certificate-heading">
                        <p className="certificate-kicker">Professional Growth</p>
                        <h1 className="font-mono text-4xl md:text-5xl">Certificates</h1>
                        <p className="certificate-intro font-mono">
                            Training milestones that helped sharpen my technical depth and real-world
                            problem solving.
                        </p>
                    </div>

                    <div className={`certificate-grid ${isVisible ? 'is-visible' : ''}`}>
                        {certificates.map((certificate, index) => (
                            <article
                                key={`${certificate.title}-${certificate.issuer}`}
                                className="certificate-card"
                                style={{ '--stagger-index': index }}
                            >
                                <div className="certificate-topline">
                                    <span className="certificate-badge">{certificate.category}</span>
                                    <div className="certificate-meta">
                                        {certificate.logo ? (
                                            <span className="certificate-logo-wrap">
                                                <img
                                                    className="certificate-logo"
                                                    src={certificate.logo}
                                                    alt={certificate.logoAlt || `${certificate.issuer} logo`}
                                                />
                                            </span>
                                        ) : null}
                                        <span className="certificate-year">{certificate.year}</span>
                                    </div>
                                </div>
                                <h2 className="certificate-title">{certificate.title}</h2>
                                <p className="certificate-issuer">{certificate.issuer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Certificates;
