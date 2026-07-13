import React from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Writing from './Writing/Writing';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import BackToTop from './BackToTop/BackToTop';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, writingData, contactData } from '../mock/data';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <PortfolioProvider
        value={{
          hero: heroData,
          about: aboutData,
          projects: projectsData,
          writing: writingData,
          contact: contactData,
          footer: {},
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
        <BackToTop />
      </PortfolioProvider>
    </Provider>
  );
}

export default App;
