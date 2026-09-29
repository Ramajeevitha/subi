import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import MoreThanAFriend from './sections/MoreThanAFriend';
import BrotherhoodJourney from './sections/BrotherhoodJourney';
import YearsTwelveInfinity from './sections/YearsTwelveInfinity';
import EmotionalMessage from './sections/EmotionalMessage';
import MemoriesArchive from './sections/MemoriesArchive';
import EmotionalLetter from './sections/EmotionalLetter';
import FinalScreen from './sections/FinalScreen';
import FinalBirthday from './sections/FinalBirthday';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';

import './styles/global.css';
import './styles/components.css';
import './styles/sections.css';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'intro',
      'more-than-a-friend',
      'our-journey',
      'memories-archive',
      'letter'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoaderFinished]);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const progressBar = document.getElementById('scroll-progress');
      if (!progressBar) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const pct = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Viewport scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-blur');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [isLoaderFinished]);

  return (
    <div className="page-wrapper">
      {/* Animated Film Grain Overlay (Sports Documentary Texture) */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Ambient Lighting & Glow Layer */}
      <div className="ambient-glow-layer" aria-hidden="true" />

      {/* Intro Athletic Starter Animation (READY? SET. GO.) */}
      <IntroLoader onComplete={() => setIsLoaderFinished(true)} />

      {/* Custom Cursor Trailing Ring (Desktop Only) */}
      <CustomCursor />

      {/* Scroll Progress Bar at the top */}
      <div className="scroll-progress-line" id="scroll-progress" />

      {/* Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Emotional Narrative */}
      <main id="main-tribute">
        <Hero />
        <Introduction />
        <MoreThanAFriend />
        <BrotherhoodJourney />
        <YearsTwelveInfinity />
        <EmotionalMessage />
        <MemoriesArchive />
        <EmotionalLetter />
        <FinalScreen />
        <FinalBirthday />
        <FinalCta />
      </main>

      {/* Minimal Tribute Footer */}
      <Footer />
    </div>
  );
}

export default App;
