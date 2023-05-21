import React from 'react';
import { useState } from 'react';

//component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      {/* <About /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
