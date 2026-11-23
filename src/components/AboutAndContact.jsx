import React from 'react';
import { ArrowRight, Github, Facebook, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

export const AboutAndContact = ({ onOpenContact }) => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`border-b ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-[#FAFAFA] border-[#E4E4E7]"
      } py-4 lg:py-5 transition-colors`}
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Area: Small label + Heading (approx 26% width) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-[2px] bg-[#A78BFA] inline-block" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#A1A1AA]">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
              Beyond the code<span className="text-[#A78BFA]">.</span>
            </h2>
          </div>

          {/* Center Area: Biography Text (approx 44% width) */}
          <div className="md:col-span-5 md:border-l md:border-[#1c1c1c] md:pl-6 lg:pl-8 md:pr-2">
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              I'm a passionate developer who loves turning ideas into functional and user-friendly web applications. With a strong foundation in modern technologies, I strive to keep learning and building solutions that make a difference.
            </p>
          </div>

          {/* Right Area: Connect & CTA (approx 30% width) */}
          <div id="contact" className="md:col-span-4 md:border-l md:border-[#1c1c1c] md:pl-6 lg:pl-8 flex flex-col items-start">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#A1A1AA] mb-0.5">
              LET'S CONNECT
            </span>
            
            <div className="mb-2 leading-none">
              <h3 className="text-lg sm:text-xl font-sans font-black text-white tracking-tight">
                Have an idea?
              </h3>
              <h3 className="text-lg sm:text-xl font-sans font-black text-[#A78BFA] tracking-tight">
                Let's build it.
              </h3>
            </div>

            {/* Get in Touch Button */}
            <button
              onClick={() => onOpenContact && onOpenContact()}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-[#141414] text-white text-xs font-mono font-medium hover:bg-white hover:text-black transition-colors mb-2.5 cursor-pointer group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 text-[#A1A1AA]">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-[#262626] bg-[#141414] hover:text-white hover:border-[#404040] flex items-center justify-center transition-colors"
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
                  className="w-7 h-7 rounded-full border border-[#262626] bg-[#141414] hover:text-white hover:border-[#404040] flex items-center justify-center transition-colors"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-[#262626] bg-[#141414] hover:text-white hover:border-[#404040] flex items-center justify-center transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}

              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="w-7 h-7 rounded-full border border-[#262626] bg-[#141414] hover:text-white hover:border-[#404040] flex items-center justify-center transition-colors"
                  title={`Email ${socialLinks.email}`}
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndContact;
