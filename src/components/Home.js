import Footer from "./Footer";
import Landing from "./Landing";
import ExploreGrid from "./ExploreGrid";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home({ singlePage = false }) {
    return (
        <>
            <Landing />
            {singlePage ? (
                <>
                    <Certificates />
                    <Skills />
                    <Projects />
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
