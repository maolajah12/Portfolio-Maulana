import './styles/global.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollLine from './components/ScrollLine';
import RunningText from './components/RunningText';
import ScrollReveal from './components/ScrollReveal';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CountdownClock from './components/CountdownClock';

function App() {
  return (
    <div>
      <CountdownClock />

      <Navbar />
      <main>
        <ScrollReveal delay={0}>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Services />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Projects />
        </ScrollReveal>

        <ScrollLine />

        <ScrollReveal delay={100}>
          <Gallery />
        </ScrollReveal>

        <ScrollLine />

        <ScrollReveal delay={100}>
          <Skills />
        </ScrollReveal>

        <ScrollLine />
        <RunningText />
        <ScrollLine />

        <ScrollReveal delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}

export default App;