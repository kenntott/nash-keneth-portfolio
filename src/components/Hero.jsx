import React from 'react';
import { ArrowRight, Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

export const Hero = () => {
  const { isDark } = useTheme();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (window.history.pushState) window.history.pushState(null, '', '#projects');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (window.history.pushState) window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section
      id="home"
      className={`relative pt-[65px] border-b ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-[#F8F9FB] border-[#E4E4E7]"
      } overflow-hidden transition-colors duration-200`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="min-h-[285px] lg:h-[305px] py-6 sm:py-8 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative">

          {/* Left Column: Introduction & Headline (approx 44% width) */}
          <div className="w-full lg:w-[44%] flex flex-col items-start z-10">

            {/* Small Introduction */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#A78BFA] inline-block" />
              <span className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
                isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
              }`}>
                HELLO, I'M
              </span>
            </div>

            {/* Main Heading — Responsive with clamp */}
            <h1 className={`text-[clamp(1.85rem,6.5vw,2.875rem)] lg:text-[46px] font-sans font-black tracking-tight leading-tight lg:leading-none mb-1.5 whitespace-normal sm:whitespace-nowrap break-words ${
              isDark ? "text-white" : "text-[#171717]"
            }`}>
              Nash Keneth<span className={isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"}>.</span>
            </h1>

            {/* Professional Subtitle */}
            <h2 className={`text-sm sm:text-base lg:text-xl font-sans font-bold tracking-tight mb-2 break-words ${
              isDark ? "text-white/95" : "text-[#27272A]"
            }`}>
              Aspiring Full-Stack Web Developer
            </h2>

            {/* Narrative Description */}
            <p className={`text-xs sm:text-[13px] leading-relaxed max-w-[430px] mb-4 ${
              isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
            }`}>
              I build modern, responsive, and functional web applications, management systems, and digital solutions that turn ideas into real-world impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className={`px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-sm ${
                  isDark
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-[#171717] text-white hover:bg-[#27272A]"
                }`}
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className={`text-xs font-semibold underline underline-offset-4 transition-colors py-1 ${
                  isDark
                    ? "text-white hover:text-[#A78BFA]"
                    : "text-[#171717] hover:text-[#7C3AED]"
                }`}
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* Middle: Portrait Image with Diagonal Cut matching IMAGE 1 (approx 42% width) */}
          <div className="w-full lg:w-[42%] flex items-center justify-center relative my-2 lg:my-0">
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] flex items-center justify-center">
              <img
                src="/images/hero-mockup-portrait.png"
                alt="Nash Keneth"
                className="w-full h-auto max-h-[220px] sm:max-h-[260px] lg:max-h-[300px] object-contain object-center"
              />
            </div>
          </div>

          {/* Far Right: Availability & Social Links (approx 14% width) */}
          <div className="w-full lg:w-[14%] flex flex-col items-center lg:items-start justify-center z-10 pt-2 lg:pt-0">

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0" />
              <span className={`text-[11px] font-mono font-medium whitespace-nowrap ${
                isDark ? "text-white/90" : "text-[#27272A]"
              }`}>
                Available for opportunities
              </span>
            </div>

            {/* Subtle Horizontal Divider */}
            <div className={`w-12 h-[1px] my-2 sm:my-2.5 transition-colors ${
              isDark ? "bg-[#262626]" : "bg-[#E4E4E7]"
            }`} />

            {/* Social Icons Row */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                      : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                  }`}
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                      : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                  }`}
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                      : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                  }`}
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                      : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                  }`}
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
