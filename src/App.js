import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

//component imports
import Home from './components/Home';
import MoreAbout from './components/MoreAbout';
import Header from './components/Header';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumePage from './components/ResumePage';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth <= 820 : false
  );

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 820);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header isMobile={isMobile} />
      <Routes>
        <Route path='/' element={<Home singlePage={isMobile} />} />
        <Route
          path='/certificates'
          element={isMobile ? <Navigate to="/#certificates" replace /> : <Certificates />}
        />
        <Route
          path='/skills'
          element={<Skills />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
        <Route
          path='/contact'
          element={isMobile ? <Navigate to="/#contactForm" replace /> : <Contact />}
        />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/MoreAboutMe' element={<MoreAbout />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
