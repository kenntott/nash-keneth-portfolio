import React, { useState, useEffect } from 'react';
import { Menu, X, Github, FileDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';
import { Starburst } from './Starburst';
import { socialLinks } from '../data/socialLinks';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 85;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "glass-nav-dark py-3.5 shadow-xl shadow-black/40"
            : "glass-nav-light py-3.5 shadow-sm"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Circular Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-0.5 border-2 transition-all duration-300 group-hover:scale-105 overflow-hidden flex-shrink-0 shadow-md ${
                isDark
                  ? "border-[#8B5CF6]/70 bg-[#0B0F19] shadow-glow-purple-sm"
                  : "border-[#7C3AED]/70 bg-white shadow-sm"
              }`}
            >
              <img
                src="/images/logo.webp"
                alt="NK Logo"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -top-1 -right-1 pointer-events-none">
                <Starburst className="w-2.5 h-2.5 text-[#C084FC]" animate={false} />
              </span>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors whitespace-nowrap ${
                  isDark ? "text-white" : "text-[#0F172A]"
                }`}
              >
                {socialLinks.name}<span className="text-[#8B5CF6]">.</span>
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase whitespace-nowrap ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-white font-semibold"
                        : "text-[#7C3AED] font-semibold"
                      : isDark
                      ? "text-[#9E9EB8] hover:text-white hover:bg-[#131322]"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-violet-50/60"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBadge"
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                        isDark ? "bg-gradient-to-r from-[#A855F7] to-[#EC4899]" : "bg-[#7C3AED]"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: GitHub, Theme Toggle, Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#131322] border-[#242338] text-[#9E9EB8] hover:text-white hover:border-[#8B5CF6]/50"
                  : "bg-white border-[#E4E4F2] text-[#64748B] hover:text-[#0F172A] hover:border-[#7C3AED]/40 shadow-sm"
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <ThemeToggle />

            <a
              href={socialLinks.resumePath}
              download="Nash_Keneth_Barzo_CV.pdf"
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-heading rounded-2xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
                isDark
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white hover:shadow-glow-purple"
                  : "bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-md"
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className={`p-2.5 rounded-2xl border transition-colors ${
                isDark
                  ? "bg-[#131322] border-[#242338] text-white"
                  : "bg-white border-[#E4E4F2] text-[#0F172A] shadow-sm"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? "bg-[#07070B]/98 border-[#242338] backdrop-blur-2xl"
                : "bg-white/98 border-[#E4E4F2] backdrop-blur-2xl shadow-xl"
            }`}
          >
            <div className="max-w-7xl mx-auto px-5 pt-4 pb-7 space-y-2">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                      isActive
                        ? isDark
                          ? "text-white bg-[#18182B] border-l-4 border-[#8B5CF6]"
                          : "text-[#7C3AED] bg-violet-50 border-l-4 border-[#7C3AED]"
                        : isDark
                        ? "text-[#9E9EB8] hover:text-white hover:bg-[#131322]"
                        : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-dashed border-gray-700/30 dark:border-gray-800 flex items-center justify-between gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border text-sm font-medium ${
                    isDark
                      ? "bg-[#131322] border-[#242338] text-white"
                      : "bg-slate-50 border-[#E4E4F2] text-[#0F172A]"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={socialLinks.resumePath}
                  download="Nash_Keneth_Barzo_CV.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
