import React, { useState, useEffect } from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import BackToTop from './BackToTop/BackToTop';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({});
  }, []);

  return (
    <Provider theme={defaultTheme}>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </PortfolioProvider>
    </Provider>
  );
}

export default App;
