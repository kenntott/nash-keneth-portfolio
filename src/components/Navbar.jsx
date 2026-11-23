import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';
import { socialLinks } from '../data/socialLinks';

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Journey", href: "#journey", id: "journey" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const { isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Active section tracking with IntersectionObserver + edge scroll fallback
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'journey', 'contact'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Edge case: Top of page
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Edge case: Bottom of page reached
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to accurately track the active section
    const visibleRatios = {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios[entry.target.id] = entry.intersectionRatio;
        });

        // Only update via observer if not at extreme top or bottom
        if (
          window.scrollY >= 80 &&
          window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 60
        ) {
          let maxRatio = 0;
          let bestId = null;

          sectionIds.forEach((id) => {
            const ratio = visibleRatios[id] || 0;
            if (ratio > maxRatio) {
              maxRatio = ratio;
              bestId = id;
            }
          });

          if (bestId && maxRatio > 0.05) {
            setActiveSection(bestId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-70px 0px -40% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Handle direct landing URL hashes and browser Back / Forward
  useEffect(() => {
    const handleHashNavigation = (instant = false) => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = hash.replace('#', '');
      const validIds = ['home', 'about', 'projects', 'skills', 'journey', 'contact'];
      if (!validIds.includes(targetId)) return;

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: instant ? 'auto' : 'smooth' });
        setActiveSection('home');
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: instant ? 'auto' : 'smooth' });
        setActiveSection(targetId);
      }
    };

    // Immediate jump for direct URL landings and page refresh
    handleHashNavigation(true);
    const timer = setTimeout(() => handleHashNavigation(true), 150);

    const onHashChange = () => handleHashNavigation(false);
    const onPopState = () => handleHashNavigation(true);

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onPopState);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }

    const targetId = href.replace('#', '');

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      if (window.history.pushState) {
        window.history.pushState(null, '', '#home');
      }
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isDark
          ? "bg-[#080808]/95 border-[#1c1c1c] text-white"
          : "bg-white/95 border-[#E4E4E7] text-black"
      } backdrop-blur-md`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[65px] gap-2">
          
          {/* Brand Monogram & Name with Vertical Separator */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center group cursor-pointer min-w-0"
            >
              {/* NK. Monogram badge */}
              <div className="text-lg sm:text-xl font-display font-black tracking-tight text-white px-2 sm:px-2.5 py-0.5 rounded border border-[#262626] bg-[#141414] group-hover:border-[#A78BFA]/70 transition-colors flex-shrink-0">
                NK<span className="text-[#A78BFA]">.</span>
              </div>

              {/* Vertical separator - always visible with proportional spacing */}
              <div className="h-5 sm:h-6 w-[1px] bg-[#262626] mx-2 sm:mx-3 flex-shrink-0" />

              {/* Name & Title */}
              <div className="flex flex-col min-w-0">
                <span className={`text-xs sm:text-sm md:text-base font-display font-bold tracking-tight leading-tight transition-colors truncate ${
                  isDark ? "text-white group-hover:text-[#A78BFA]" : "text-black group-hover:text-[#7C3AED]"
                }`}>
                  Nash Keneth
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-wider sm:tracking-widest uppercase text-[#71717A] leading-tight mt-0.5 truncate">
                  FULL-STACK DEVELOPER
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links (Desktop & Tablet) */}
          <nav className="hidden md:flex items-center gap-3.5 lg:gap-7 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-xs lg:text-sm font-medium transition-colors flex flex-col items-center whitespace-nowrap ${
                    isActive
                      ? isDark
                        ? "text-white font-semibold"
                        : "text-black font-semibold"
                      : isDark
                      ? "text-[#A1A1AA] hover:text-white"
                      : "text-[#71717A] hover:text-black"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${
                        isDark ? "bg-white" : "bg-black"
                      }`}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5 flex-shrink-0">
            {/* GitHub Button */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                  : "border-[#E4E4E7] bg-white text-[#71717A] hover:text-black hover:border-[#A1A1AA]"
              }`}
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Download CV Pill */}
            <a
              href={socialLinks.resumePath}
              download="Nash_Keneth_Barzo_CV.pdf"
              className={`inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap ${
                isDark
                  ? "border-[#262626] bg-[#141414] text-white hover:bg-[#1C1C1C] hover:border-[#404040]"
                  : "border-[#E4E4E7] bg-white text-black hover:bg-[#F4F4F5] hover:border-[#A1A1AA] shadow-sm"
              }`}
              title="Download Nash Keneth CV"
            >
              <Download className="w-3.5 h-3.5 flex-shrink-0" />
              <span><span className="hidden lg:inline">Download </span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-[#262626] bg-[#141414] text-white hover:bg-[#1C1C1C]"
                  : "border-[#E4E4E7] bg-white text-black hover:bg-[#F4F4F5]"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b w-full overflow-hidden ${
              isDark ? "bg-[#080808]/98 border-[#1c1c1c]" : "bg-white/98 border-[#E4E4E7]"
            } px-5 py-4`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium py-2.5 px-2 rounded-lg transition-colors min-h-[44px] flex items-center ${
                    activeSection === link.id
                      ? isDark ? "text-white font-bold bg-[#141414]" : "text-black font-bold bg-[#F4F4F5]"
                      : isDark ? "text-[#A1A1AA] hover:text-white hover:bg-[#121212]" : "text-[#71717A] hover:text-black hover:bg-[#FAFAFA]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#262626] flex items-center justify-between px-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 py-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialLinks.resumePath}
                  download="Nash_Keneth_Barzo_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono bg-white text-black font-semibold min-h-[36px]"
                >
                  <Download className="w-3.5 h-3.5" />
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
