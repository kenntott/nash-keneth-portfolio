import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, CheckCircle2, Layers } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ProjectCard = ({ project, onViewDetails }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
        isDark
          ? "bg-[#161920] border-[#292E38] hover:border-[#00E5A8]/50 hover:shadow-card-dark"
          : "bg-white border-[#E2E8F0] hover:border-[#059669]/50 hover:shadow-card-light shadow-sm"
      }`}
    >
      <div>
        {/* Project Thumbnail Image with Category Overlay */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-gray-700/20 dark:border-gray-800">
          {!imageError ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#111318] to-[#161920]">
              <Layers className="w-10 h-10 text-[#00E5A8] mb-2" />
              <p className="font-heading font-bold text-white text-base">{project.title}</p>
              <p className="text-xs text-[#A1A1AA]">{project.category}</p>
            </div>
          )}

          {/* Badge Overlays */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md shadow-sm border ${
                isDark
                  ? "bg-[#08090C]/80 text-[#00E5A8] border-[#00E5A8]/30"
                  : "bg-white/90 text-[#059669] border-[#059669]/30"
              }`}
            >
              {project.badge}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono backdrop-blur-md border ${
                project.status.includes("Completed")
                  ? isDark
                    ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/30"
                    : "bg-emerald-50/90 text-emerald-700 border-emerald-300"
                  : isDark
                  ? "bg-amber-950/80 text-amber-400 border-amber-500/30"
                  : "bg-amber-50/90 text-amber-700 border-amber-300"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-7">
          <div className="mb-3">
            <span
              className={`text-xs font-mono font-medium uppercase tracking-wider ${
                isDark ? "text-[#00E5A8]" : "text-[#059669]"
              }`}
            >
              {project.category}
            </span>
            <h3
              className={`text-xl sm:text-2xl font-bold font-heading mt-1 transition-colors ${
                isDark ? "text-white group-hover:text-[#00E5A8]" : "text-[#111827] group-hover:text-[#059669]"
              }`}
            >
              {project.title}
            </h3>
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            {project.description}
          </p>

          {/* Key Features Preview */}
          <div className="mb-6 space-y-2">
            <p className={`text-xs font-mono uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Key Highlights:
            </p>
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <CheckCircle2
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isDark ? "text-[#00E5A8]" : "text-[#059669]"
                  }`}
                />
                <span className={`line-clamp-1 ${isDark ? "text-[#E4E4E7]" : "text-[#334155]"}`}>
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Technology Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-gray-700/30 dark:border-gray-800">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors ${
                  isDark
                    ? "bg-[#111318] border-[#292E38] text-[#A1A1AA]"
                    : "bg-slate-100 border-[#E2E8F0] text-[#475569]"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div
        className={`p-5 px-6 border-t flex items-center justify-between gap-3 ${
          isDark ? "bg-[#111318]/50 border-[#292E38]" : "bg-slate-50/50 border-[#E2E8F0]"
        }`}
      >
        <button
          onClick={() => onViewDetails(project)}
          type="button"
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
            isDark
              ? "bg-[#00E5A8]/10 text-[#00E5A8] border-[#00E5A8]/30 hover:bg-[#00E5A8] hover:text-[#08090C]"
              : "bg-emerald-50 text-[#059669] border-emerald-300 hover:bg-[#059669] hover:text-white"
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>

        {/* Live Demo button - ONLY shown if URL exists */}
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-white hover:text-[#00E5A8]"
                : "bg-white border-[#E2E8F0] text-[#111827] hover:text-[#059669] shadow-sm"
            }`}
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}

        {/* Source Code button - ONLY shown if URL exists */}
        {project.sourceCode ? (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-white hover:text-[#00E5A8]"
                : "bg-white border-[#E2E8F0] text-[#111827] hover:text-[#059669] shadow-sm"
            }`}
            title="Source Code"
          >
            <Github className="w-4 h-4" />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
