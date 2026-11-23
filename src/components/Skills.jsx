import React from 'react';
import { Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Skills = () => {
  const { isDark } = useTheme();

  const technologies = [
    {
      name: "React",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: "JavaScript",
      icon: (
        <div className="w-5 h-5 rounded bg-[#F7DF1E] text-black font-black flex items-center justify-center text-[9px] font-mono">
          JS
        </div>
      )
    },
    {
      name: "PHP",
      icon: (
        <div className="px-1.5 py-0.5 rounded bg-[#777BB4] text-white font-bold text-[8px] font-mono">
          PHP
        </div>
      )
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#4479A1" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3ECF8E">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.12 14.288a.396.396 0 0 0 .307.636H9.79v8.68a.396.396 0 0 0 .717.234l11.163-14.124a.396.396 0 0 0-.308-.636z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032">
          <path d="M23.546 10.93L13.067.452a1.503 1.503 0 0 0-2.127 0L8.835 2.556l2.929 2.929a1.785 1.785 0 0 1 2.26 2.274l2.822 2.822a1.785 1.785 0 1 1-.958.932l-2.639-2.639v6.782a1.788 1.788 0 1 1-1.344-.067V9.756a1.788 1.788 0 0 1-.944-2.338L8.85 4.508.454 12.904a1.503 1.503 0 0 0 0 2.127l10.479 10.478a1.503 1.503 0 0 0 2.127 0l10.486-10.478a1.503 1.503 0 0 0 0-2.101z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section
      id="skills"
      className={`border-b ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-[#FAFAFA] border-[#E4E4E7]"
      } py-3.5 lg:py-4 transition-colors`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">

          {/* Left: Heading (approx 25% width) */}
          <div className="flex flex-col items-start min-w-[180px] sm:min-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-[2px] bg-[#A78BFA] inline-block" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#A1A1AA]">
                TECH STACK
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-sans font-black text-white tracking-tight">
              Tools I work with<span className="text-[#A78BFA]">.</span>
            </h2>
          </div>

          {/* Right: Responsive Grid on Mobile / Row on Desktop (approx 75% width) */}
          <div className="w-full lg:w-auto lg:flex-1 grid grid-cols-4 sm:grid-cols-8 lg:flex lg:items-center lg:justify-end gap-3 sm:gap-3.5 lg:gap-6 pt-1 lg:pt-0">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center group cursor-default"
              >
                {/* Dark squircle container */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center p-2 transition-all duration-200 group-hover:-translate-y-0.5 ${
                    isDark
                      ? "bg-[#121212] border-[#222222] group-hover:border-[#404040]"
                      : "bg-white border-[#E4E4E7] group-hover:border-[#A1A1AA] shadow-sm"
                  }`}
                >
                  {tech.icon}
                </div>

                {/* Technology Name */}
                <span className="text-[10px] font-mono text-[#A1A1AA] group-hover:text-white mt-1 font-medium text-center transition-colors truncate max-w-[68px]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
