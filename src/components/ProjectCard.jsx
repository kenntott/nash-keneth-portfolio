import React from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ProjectCard = ({ project, onViewDetails }) => {
  const { isDark } = useTheme();

  return (
    <div
      onClick={() => onViewDetails && onViewDetails(project)}
      className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group cursor-pointer ${
        isDark
          ? "bg-[#121212] border-[#222222] hover:border-[#383838]"
          : "bg-white border-[#E4E4E7] hover:border-[#A1A1AA] shadow-sm"
      }`}
    >
      {/* Upper Screenshot Area */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0d0d0d]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Lower Info Bar */}
      <div
        className={`px-3.5 py-2.5 flex items-center justify-between border-t transition-colors ${
          isDark ? "bg-[#141414] border-[#1f1f1f]" : "bg-[#F8F9FB] border-[#E4E4E7]"
        }`}
      >
        <div className="flex flex-col pr-2 min-w-0 flex-1">
          <h3 className={`text-xs sm:text-[13px] font-sans font-bold tracking-tight leading-snug transition-colors truncate ${
            isDark ? "text-white group-hover:text-[#A78BFA]" : "text-[#171717] group-hover:text-[#7C3AED]"
          }`}>
            {project.title}
          </h3>
          <p className={`text-[10px] font-mono mt-0.5 leading-none truncate ${
            isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
          }`}>
            {project.subtitle || project.category}
          </p>
        </div>

        {/* Right Actions & Badge Pill */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Open Live Demo"
              aria-label={`${project.title} Live Demo`}
              className={`p-1 rounded-md transition-colors ${
                isDark
                  ? "text-[#A1A1AA] hover:text-white hover:bg-[#222222]"
                  : "text-[#52525B] hover:text-black hover:bg-[#E4E4E7]"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View Source Code"
              aria-label={`${project.title} Source Code`}
              className={`p-1 rounded-md transition-colors ${
                isDark
                  ? "text-[#A1A1AA] hover:text-white hover:bg-[#222222]"
                  : "text-[#52525B] hover:text-black hover:bg-[#E4E4E7]"
              }`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border transition-colors ${
              isDark
                ? "border-[#282828] bg-[#0c0c0c] text-white group-hover:border-[#444444] group-hover:bg-[#1a1a1a]"
                : "border-[#D4D4D8] bg-white text-[#171717] group-hover:bg-[#F4F4F5] shadow-sm"
            }`}
          >
            <span>{project.badge || "Project"}</span>
            <ArrowRight className={`w-2.5 h-2.5 transition-colors ${
              isDark ? "text-[#A1A1AA] group-hover:text-white" : "text-[#71717A] group-hover:text-black"
            }`} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
