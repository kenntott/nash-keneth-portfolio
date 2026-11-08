import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  FileCode2,
  Play
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';
import { ProfileCard } from './ProfileCard';

const TYPING_TITLES = [
  "Frontend Developer",
  "React Developer",
  "Information Systems Developer",
];

export const Hero = () => {
  const { isDark } = useTheme();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated Typing Effect
  useEffect(() => {
    const currentFullTitle = TYPING_TITLES[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullTitle) {
      typingSpeed = 1800; // Pause at end of text
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      typingSpeed = 300;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullTitle.substring(0, displayText.length - 1)
          : currentFullTitle.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
          isDark ? "bg-[#00E5A8]/8" : "bg-[#059669]/6"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-6 border transition-colors ${
                isDark
                  ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                  : "bg-white border-[#E2E8F0] text-[#059669] shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                  }`}
                />
              </span>
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading mb-4 leading-[1.1] ${
                isDark ? "text-white" : "text-[#111827]"
              }`}
            >
              Hi, I'm{" "}
              <span
                className={`relative inline-block ${
                  isDark
                    ? "bg-gradient-to-r from-[#00E5A8] via-[#61DAFB] to-[#00E5A8] bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#059669] via-[#0891B2] to-[#059669] bg-clip-text text-transparent"
                }`}
              >
                {socialLinks.name}
              </span>
            </motion.h1>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-h-[3rem] sm:min-h-[3.5rem] flex items-center mb-4"
            >
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-semibold font-heading flex items-center gap-2 ${
                  isDark ? "text-[#E4E4E7]" : "text-[#1F2937]"
                }`}
              >
                <span>{displayText}</span>
                <span
                  className={`inline-block w-0.5 h-6 sm:h-7 animate-pulse ${
                    isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                  }`}
                />
              </h2>
            </motion.div>

            {/* Professional Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-base sm:text-lg leading-relaxed max-w-xl mb-8 ${
                isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
              }`}
            >
              {socialLinks.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#00E5A8] text-[#08090C] hover:bg-[#00E5A8]/90 hover:shadow-glow-green"
                    : "bg-[#059669] text-white hover:bg-[#047857] hover:shadow-md"
                }`}
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-white hover:border-[#00E5A8]/50 hover:text-[#00E5A8]"
                    : "bg-white border-[#E2E8F0] text-[#111827] hover:border-[#059669]/50 hover:text-[#059669] shadow-sm"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#111318] border-[#292E38] text-[#A1A1AA] hover:text-white hover:border-gray-600"
                    : "bg-slate-50 border-[#E2E8F0] text-[#64748B] hover:text-[#111827] hover:border-slate-300"
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-10 mt-10 border-t border-gray-700/20 dark:border-gray-800/80 w-full max-w-lg"
            >
              <div>
                <p className={`text-2xl sm:text-3xl font-bold font-heading ${isDark ? "text-white" : "text-[#111827]"}`}>
                  4+
                </p>
                <p className={`text-xs ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  Core Information Systems
                </p>
              </div>

              <div>
                <p className={`text-2xl sm:text-3xl font-bold font-heading ${isDark ? "text-[#00E5A8]" : "text-[#059669]"}`}>
                  100%
                </p>
                <p className={`text-xs ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  Responsive & Modular
                </p>
              </div>

              <div>
                <p className={`text-2xl sm:text-3xl font-bold font-heading ${isDark ? "text-[#61DAFB]" : "text-[#0891B2]"}`}>
                  React
                </p>
                <p className={`text-xs ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  Vite & Tailwind Stack
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Developer Code Editor Interface + Floating Tech Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Floating Tech Icons */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className={`hidden sm:flex absolute -top-6 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-lg ${
                isDark
                  ? "bg-[#161920]/90 border-[#292E38] text-[#61DAFB]"
                  : "bg-white/90 border-[#E2E8F0] text-[#0891B2]"
              }`}
            >
              <Cpu className="w-4 h-4 animate-spin-slow" />
              <span className="text-xs font-mono font-medium">React 18 + Vite</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className={`hidden sm:flex absolute -bottom-6 -left-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl border backdrop-blur-md shadow-lg ${
                isDark
                  ? "bg-[#161920]/90 border-[#292E38] text-[#00E5A8]"
                  : "bg-white/90 border-[#E2E8F0] text-[#059669]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5A8] animate-ping" />
              <span className="text-xs font-mono font-medium">Supabase & PostgreSQL</span>
            </motion.div>

            {/* Developer Code Editor Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 ${
                isDark
                  ? "bg-[#111318] border-[#292E38] shadow-black/60"
                  : "bg-white border-[#E2E8F0] shadow-slate-200"
              }`}
            >
              {/* Window Header */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b ${
                  isDark ? "bg-[#161920] border-[#292E38]" : "bg-slate-100 border-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className={`ml-2 text-xs font-mono ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                    DeveloperProfile.jsx
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                  <Play className="w-3 h-3 fill-current" />
                  <span>v2.0.0</span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className={`p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto ${
                isDark ? "bg-[#08090C] text-[#E4E4E7]" : "bg-slate-900 text-slate-100"
              }`}>
                <div className="space-y-1">
                  <p>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-400">name</span>:{" "}
                    <span className="text-amber-300">"{socialLinks.fullName}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-400">primaryFocus</span>: [
                  </p>
                  <p className="pl-8 text-cyan-300">
                    "Frontend Engineering", "Information Systems", "UI/UX"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-emerald-400">coreStack</span>: &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-purple-400">ui</span>:{" "}
                    <span className="text-amber-300">"React + Tailwind CSS"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-purple-400">backend</span>:{" "}
                    <span className="text-amber-300">"Supabase / PostgreSQL / PHP"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-purple-400">deploy</span>:{" "}
                    <span className="text-amber-300">"Vercel + GitHub Actions"</span>
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-emerald-400">dualThemeActive</span>:{" "}
                    <span className="text-pink-400">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-400">hireable</span>:{" "}
                    <span className="text-pink-400">true</span>
                  </p>
                  <p>&#125;;</p>
                  <p className="pt-2 text-gray-500">// Ready to build robust, modern digital systems</p>
                </div>

                {/* Simulated Terminal Status */}
                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00E5A8]" />
                    <span className="text-gray-300">vite build</span>
                    <span className="text-emerald-400 font-semibold">✓ 4 modules transformed in 180ms</span>
                  </div>
                  <span className="text-gray-500">production</span>
                </div>
              </div>
            </motion.div>

            {/* Embedded Profile Preview Card beneath code window */}
            <div className="mt-6">
              <ProfileCard />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
