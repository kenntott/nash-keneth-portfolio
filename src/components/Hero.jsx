import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Linkedin, 
  Code2, 
  Database, 
  Layers, 
  Sparkles, 
  FileCode2, 
  Cpu, 
  Play,
  Terminal
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { ProfileCard } from './ProfileCard';
import { socialLinks } from '../data/socialLinks';

export const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-mesh-dark dark:bg-mesh-dark">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none opacity-40 bg-gradient-to-tr from-[#8B5CF6]/30 via-[#EC4899]/20 to-[#38BDF8]/20" />
      
      {/* Starburst floating in hero background */}
      <div className="absolute top-28 left-[10%] opacity-40 pointer-events-none">
        <Starburst className="w-10 h-10 text-[#C084FC]" rotate={true} />
      </div>
      <div className="absolute bottom-16 right-[8%] opacity-30 pointer-events-none">
        <Starburst className="w-12 h-12 text-[#EC4899]" animate={true} delay={1.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Headline & Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 border shadow-sm ${
                isDark
                  ? "bg-[#131322] border-[#242338] text-[#C084FC] shadow-purple-500/10"
                  : "bg-white border-[#E4E4F2] text-[#7C3AED] shadow-sm"
              }`}
            >
              <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" animate={false} />
              <span>{socialLinks.greeting || "HELLO, I'M"}</span>
              <span className="w-1 h-1 rounded-full bg-current opacity-60" />
              <span className="text-emerald-400 font-semibold">ONLINE</span>
            </motion.div>

            {/* Oversized Adelina Heading with Clamp & Clean Word Wrap */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-[clamp(1.85rem,6.8vw,4.5rem)] font-display font-extrabold tracking-tight leading-[1.08] mb-4 break-normal max-w-full ${
                isDark ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {socialLinks.name.toUpperCase()}
              <span className="text-[#8B5CF6]">.</span>
            </motion.h1>

            {/* Professional Subheading with Highlight Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 max-w-full"
            >
              <span
                className={`text-xl sm:text-3xl md:text-4xl font-display font-bold break-normal ${
                  isDark ? "text-gradient-adelina" : "text-gradient-adelina-light"
                }`}
              >
                {socialLinks.title}
              </span>

              <span className="inline-block px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 border border-[#8B5CF6]/40 text-[#C084FC] -rotate-1 sm:-rotate-2 whitespace-nowrap">
                FULL-STACK &amp; SYSTEMS
              </span>
            </motion.div>

            {/* Tagline / Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 font-normal ${
                isDark ? "text-[#9E9EB8]" : "text-[#475569]"
              }`}
            >
              {socialLinks.tagline}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#projects"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-heading font-bold text-sm text-white transition-all duration-300 shadow-lg hover:-translate-y-1 ${
                  isDark
                    ? "bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#EC4899] hover:shadow-glow-purple"
                    : "bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:shadow-md"
                }`}
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-heading font-bold text-sm border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#131322] border-[#242338] text-white hover:border-[#8B5CF6] hover:text-[#C084FC]"
                    : "bg-white border-[#E4E4F2] text-[#0F172A] hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-sm"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {/* Social shortcuts */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`p-3.5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-[#131322] border-[#242338] text-[#9E9EB8] hover:text-white hover:border-[#8B5CF6]"
                      : "bg-white border-[#E4E4F2] text-[#64748B] hover:text-[#0F172A] hover:border-[#7C3AED] shadow-sm"
                  }`}
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`p-3.5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-[#131322] border-[#242338] text-[#9E9EB8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50"
                      : "bg-white border-[#E4E4F2] text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7]/50 shadow-sm"
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 pt-8 border-t border-gray-700/20 dark:border-gray-800/80 w-full max-w-lg"
            >
              <div>
                <p className={`text-xl sm:text-3xl md:text-4xl font-display font-extrabold whitespace-nowrap ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                  4+
                </p>
                <p className={`text-[10px] sm:text-xs font-mono mt-1 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                  Systems
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl md:text-4xl font-display font-extrabold text-gradient-purple whitespace-nowrap">
                  100%
                </p>
                <p className={`text-[10px] sm:text-xs font-mono mt-1 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                  Responsive
                </p>
              </div>

              <div>
                <p className={`text-xl sm:text-3xl md:text-4xl font-display font-extrabold whitespace-nowrap ${isDark ? "text-[#38BDF8]" : "text-[#0284C7]"}`}>
                  Full-Stack
                </p>
                <p className={`text-[10px] sm:text-xs font-mono mt-1 whitespace-nowrap ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                  React + DBs
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile with Floating Tech Icons (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center w-full">
            
            {/* Floating Tech Badge 1: React & JS */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
              className={`hidden md:flex absolute -top-6 -left-4 lg:-top-8 lg:-left-8 z-30 items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-2xl border backdrop-blur-md shadow-lg ${
                isDark
                  ? "bg-[#18182B]/95 border-[#242338] text-[#38BDF8] shadow-black/40"
                  : "bg-white/95 border-[#E4E4F2] text-[#0284C7] shadow-slate-200"
              }`}
            >
              <Code2 className="w-4 h-4 text-[#61DAFB]" />
              <span className="text-xs font-mono font-bold">React.js &amp; JS (ES6+)</span>
            </motion.div>

            {/* Floating Tech Badge 2: PostgreSQL & Supabase */}
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className={`hidden md:flex absolute -bottom-5 -right-4 lg:-bottom-6 lg:-right-6 z-30 items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-2xl border backdrop-blur-md shadow-lg ${
                isDark
                  ? "bg-[#18182B]/95 border-[#242338] text-[#C084FC] shadow-purple-500/10"
                  : "bg-white/95 border-[#E4E4F2] text-[#7C3AED] shadow-violet-500/10"
              }`}
            >
              <Database className="w-4 h-4 text-[#A855F7]" />
              <span className="text-xs font-mono font-bold">PostgreSQL &amp; MySQL</span>
            </motion.div>

            {/* Profile Card Container with Dual-Picture Support */}
            <div className="w-full max-w-md">
              <ProfileCard />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
