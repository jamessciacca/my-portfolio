import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Certificates from "./Certificates";

function Home() {
    return (
        <>
        <Header />
        <Landing />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    );
    }

export default Home;