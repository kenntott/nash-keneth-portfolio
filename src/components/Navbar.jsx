import React, { useState, useEffect } from 'react';
import { Menu, X, Github, FileDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';
import { socialLinks } from '../data/socialLinks';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
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

      // Scrollspy active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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
      const navOffset = 80;
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
            ? "bg-[#08090C]/85 border-b border-[#292E38]/80 shadow-lg shadow-black/30 backdrop-blur-md py-3.5"
            : "bg-white/85 border-b border-[#E2E8F0]/80 shadow-sm backdrop-blur-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-lg border transition-all duration-300 ${
                isDark
                  ? "bg-[#161920] border-[#292E38] text-[#00E5A8] group-hover:border-[#00E5A8] group-hover:shadow-glow-green-sm"
                  : "bg-slate-100 border-[#E2E8F0] text-[#059669] group-hover:border-[#059669] shadow-sm"
              }`}
            >
              &lt;N/&gt;
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-lg tracking-tight transition-colors ${
                  isDark ? "text-white" : "text-[#111827]"
                }`}
              >
                Nash<span className={isDark ? "text-[#00E5A8]" : "text-[#059669]"}>.dev</span>
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-[#00E5A8] bg-[#00E5A8]/10"
                        : "text-[#059669] bg-emerald-50"
                      : isDark
                      ? "text-[#A1A1AA] hover:text-white hover:bg-[#161920]"
                      : "text-[#64748B] hover:text-[#111827] hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#161920]/80 border-[#292E38] text-white hover:text-[#00E5A8] hover:border-[#00E5A8]/40"
                  : "bg-white border-[#E2E8F0] text-[#111827] hover:text-[#059669] hover:border-[#059669]/40 shadow-sm"
              }`}
              title="View GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <ThemeToggle />

            <a
              href={socialLinks.resumePath}
              download="Nash_Resume.pdf"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#00E5A8] text-[#08090C] border-[#00E5A8] hover:bg-[#00E5A8]/90 hover:shadow-glow-green-sm"
                  : "bg-[#059669] text-white border-[#059669] hover:bg-[#047857]"
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? "bg-[#161920] border-[#292E38] text-white"
                  : "bg-white border-[#E2E8F0] text-[#111827] shadow-sm"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? "bg-[#08090C]/95 border-[#292E38] backdrop-blur-xl"
                : "bg-white/95 border-[#E2E8F0] backdrop-blur-xl shadow-lg"
            }`}
          >
            <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? isDark
                          ? "text-[#00E5A8] bg-[#00E5A8]/10 border-l-4 border-[#00E5A8]"
                          : "text-[#059669] bg-emerald-50 border-l-4 border-[#059669]"
                        : isDark
                        ? "text-[#A1A1AA] hover:text-white hover:bg-[#161920]"
                        : "text-[#64748B] hover:text-[#111827] hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-dashed border-gray-700/30 dark:border-gray-800 flex items-center justify-between gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium ${
                    isDark
                      ? "bg-[#161920] border-[#292E38] text-white"
                      : "bg-slate-50 border-[#E2E8F0] text-[#111827]"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={socialLinks.resumePath}
                  download="Nash_Resume.pdf"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold ${
                    isDark
                      ? "bg-[#00E5A8] text-[#08090C]"
                      : "bg-[#059669] text-white"
                  }`}
                >
                  <FileDown className="w-4 h-4" />
                  <span>Resume</span>
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
