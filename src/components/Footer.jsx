import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

const footerNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
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
      className={`border-t transition-colors duration-300 pt-16 pb-12 ${
        isDark ? "bg-[#08090C] border-[#292E38]" : "bg-white border-[#E2E8F0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-700/20 dark:border-gray-800">
          
          {/* Brand & Introduction (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-base border ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                    : "bg-slate-100 border-[#E2E8F0] text-[#059669]"
                }`}
              >
                &lt;N/&gt;
              </div>
              <span
                className={`font-heading font-bold text-xl tracking-tight ${
                  isDark ? "text-white" : "text-[#111827]"
                }`}
              >
                Nash<span className={isDark ? "text-[#00E5A8]" : "text-[#059669]"}>.dev</span>
              </span>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed max-w-md ${
                isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
              }`}
            >
              {socialLinks.title}. Focused on building high-performance web systems, responsive interfaces, and scalable database-backed platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-[#A1A1AA] hover:text-white hover:border-[#00E5A8]/50"
                    : "bg-slate-50 border-[#E2E8F0] text-[#64748B] hover:text-[#111827] hover:border-[#059669]/50 shadow-sm"
                }`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-[#A1A1AA] hover:text-[#61DAFB] hover:border-[#61DAFB]/50"
                    : "bg-slate-50 border-[#E2E8F0] text-[#64748B] hover:text-[#0891B2] hover:border-[#0891B2]/50 shadow-sm"
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Send Email"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-[#A1A1AA] hover:text-[#00E5A8] hover:border-[#00E5A8]/50"
                    : "bg-slate-50 border-[#E2E8F0] text-[#64748B] hover:text-[#059669] hover:border-[#059669]/50 shadow-sm"
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4
              className={`text-xs font-mono uppercase tracking-wider mb-4 font-semibold ${
                isDark ? "text-white" : "text-[#111827]"
              }`}
            >
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-[#A1A1AA] hover:text-[#00E5A8]"
                        : "text-[#64748B] hover:text-[#059669]"
                    }`}
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
              <h4
                className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                  isDark ? "text-white" : "text-[#111827]"
                }`}
              >
                Ready for Production
              </h4>
              <p className={`text-xs ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                Vercel Edge &amp; GitHub Ready
              </p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#161920] border-[#292E38] text-white hover:border-[#00E5A8]"
                  : "bg-white border-[#E2E8F0] text-[#111827] hover:border-[#059669] shadow-sm"
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}>
            © {new Date().getFullYear()} {socialLinks.fullName}. All rights reserved.
          </p>

          <p
            className={`font-mono inline-flex items-center gap-1.5 ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            <span>Designed and Developed with</span>
            <span className={isDark ? "text-[#61DAFB]" : "text-[#0891B2]"}>React.js</span>
            <span>&amp;</span>
            <span className={isDark ? "text-[#00E5A8]" : "text-[#059669]"}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
