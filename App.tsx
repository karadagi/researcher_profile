
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import SelectedWorks from './components/SelectedWorks';
import Teaching from './components/Teaching';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // Force light mode on mount
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'research', 'selected-works', 'teaching'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-accent-light selection:text-white dark:selection:bg-accent-dark">
      <Navbar
        activeSection={activeSection}
      />

      <main className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-8">
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center">
          <Hero />
        </section>

        <div className="space-y-32 py-20">
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="research">
            <Research />
          </SectionWrapper>

          <SectionWrapper id="selected-works">
            <SelectedWorks />
          </SectionWrapper>

          <SectionWrapper id="teaching">
            <Teaching />
          </SectionWrapper>
        </div>
      </main>

      <BackToTop />
    </div>
  );
};

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      {children}
    </section>
  );
};

export default App;
