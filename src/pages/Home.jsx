import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#080808] text-white selection:bg-[#A78BFA] selection:text-black">
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
