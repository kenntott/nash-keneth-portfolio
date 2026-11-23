import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Target, BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { AnimatedSection } from './AnimatedSection';
import { cvData } from '../data/cvData';

export const About = () => {
  const { isDark } = useTheme();

  return (
    <AnimatedSection id="about" className="py-8 lg:py-10 border-b border-[#1c1c1c] relative">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#A78BFA]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#A1A1AA]">
              ABOUT ME
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-[#09090B]"
            }`}
          >
            Beyond the code<span className="text-[#A78BFA]">.</span>
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Narrative Introduction & Goals (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p
              className={`text-lg sm:text-xl font-heading leading-relaxed ${
                isDark ? "text-[#E4E4E7]" : "text-[#27272A]"
              }`}
            >
              I'm a passionate developer who loves turning ideas into functional and user-friendly web applications. With a strong foundation in modern technologies, I strive to keep learning and building solutions that make a difference.
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
              }`}
            >
              As a fourth-year Information Technology student, I have bridged academic theory with hands-on client and municipal software development. My focus is on writing clean, modular code, architecting normalized database schemas, and crafting responsive user interfaces with zero visual friction.
            </p>

            {/* Development Interests */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7] shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Compass className="w-4 h-4 text-[#A78BFA]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Development Interests
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Full-Stack Web Engineering &amp; RESTful APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Relational Database Modeling (PostgreSQL &amp; MySQL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Modern Component Architecture &amp; Responsive UI/UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Interactive Real-Time &amp; 3D Graphics Development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Education & Goals Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">

            {/* Education Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7] shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-[#A78BFA]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Formal Education
                </h3>
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-display font-bold text-white">
                  {cvData.education.institution}
                </h4>
                <p className="text-sm font-medium text-[#A78BFA]">
                  {cvData.education.degree}
                </p>
                <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#A1A1AA]">
                  <span className="px-2.5 py-0.5 rounded bg-[#101010] border border-[#262626]">
                    {cvData.education.level}
                  </span>
                  <span>{cvData.education.status}</span>
                </div>
              </div>
            </div>

            {/* Personal & Career Goals Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7] shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Target className="w-5 h-5 text-[#22C55E]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Personal &amp; Career Goals
                </h3>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                To pursue opportunities in web development where I can apply my technical knowledge, gain professional experience, contribute to meaningful real-world software projects, and continually grow into an exceptional Full-Stack Web Developer.
              </p>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};

export default About;
