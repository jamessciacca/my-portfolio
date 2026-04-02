import Footer from "./Footer";
import Landing from "./Landing";
import ExploreGrid from "./ExploreGrid";
import Certificates from "./Certificates";
import Contact from "./Contact";

const mobileExploreItems = [
    {
        title: 'Projects',
        description: 'See portfolio builds, technical labs, and shipped work.',
        href: '/projects',
        tag: 'Work',
    },
    {
        title: 'Skills',
        description: 'Browse the tools, technologies, and technical strengths I use.',
        href: '/skills',
        tag: 'Skills',
    },
    {
        title: 'About Me',
        description: 'Read more about my background, goals, and experience.',
        href: '/MoreAboutMe',
        tag: 'Profile',
    },
];

function Home({ singlePage = false }) {
    return (
        <>
            <Landing isMobile={singlePage} />
            {singlePage ? (
                <>
                    <Certificates />
                    <ExploreGrid
                        compact
                        sectionId="mobileExplore"
                        items={mobileExploreItems}
                        kicker="Continue Exploring"
                        title="More To Explore"
                        intro="Click here to learn more about me and what I can do!"
                    />
                    <Contact />
                    <Footer />
                </>
            ) : (
                <ExploreGrid />
            )}
        </>
    );
}

export default Home;
