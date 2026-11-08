import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { socialLinks } from '../data/socialLinks';

const footerNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 pt-20 pb-14 relative overflow-hidden ${
        isDark ? "bg-[#050508] border-[#242338]" : "bg-violet-950 text-white border-violet-900"
      }`}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#8B5CF6]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand & Introduction (6 cols) */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center p-0.5 border-2 border-[#8B5CF6]/70 bg-[#0B0F19] shadow-glow-purple-sm overflow-hidden flex-shrink-0"
              >
                <img
                  src="/images/logo.webp"
                  alt="NK Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                  {socialLinks.name}
                  <span className="text-[#8B5CF6]">.</span>
                </span>
                <p className="text-xs font-mono font-bold text-[#C084FC]">
                  {socialLinks.title}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-md text-[#9E9EB8]">
              {socialLinks.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20 transition-all duration-200 hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/20 transition-all duration-200 hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:text-[#EC4899] hover:border-[#EC4899]/60 hover:bg-[#EC4899]/20 transition-all duration-200 hover:-translate-y-1"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" animate={false} />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Navigation
              </h4>
            </div>
            <ul className="space-y-2.5 text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9E9EB8] hover:text-[#C084FC] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top & Deployment Note (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Production Ready
                </h4>
              </div>
              <p className="text-xs text-[#9E9EB8]">
                Vercel Edge &amp; GitHub Architecture
              </p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-heading font-bold border border-white/15 bg-white/5 text-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20 transition-all duration-200 hover:-translate-y-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C084FC]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9EB8]">
          <p>
            © {new Date().getFullYear()} {socialLinks.fullName} ({socialLinks.monogram}). All rights reserved.
          </p>

          <p className="font-mono flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-[#EC4899]">React</span>
            <span>&amp;</span>
            <span className="text-[#C084FC]">Adelina Styling</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
