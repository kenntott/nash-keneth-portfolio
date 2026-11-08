import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import ResumeSection from '../components/ResumeSection';
import GithubShowcase from '../components/GithubShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumeSection />
        <GithubShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
