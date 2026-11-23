import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const Home = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 selection:bg-[#A78BFA] selection:text-black ${
        isDark ? "bg-[#080808] text-white" : "bg-[#F8F9FB] text-[#171717]"
      }`}
    >
      {/* Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Compact Footer */}
      <Footer />
    </div>
  );
};

export default Home;
