import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';

export const ProjectCard = ({ project, onViewDetails, index = 0 }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);

  // Asymmetrical card layout: First card is prominent featured showcase, followed by dual-column pair
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
      } ${
        isDark
          ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/70 hover:shadow-glow-purple"
          : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/60 hover:shadow-card-light shadow-sm"
      }`}
    >
      <div>
        {/* Project Thumbnail Image with Category Overlay & Zoom on Hover */}
        <div
          className={`relative overflow-hidden bg-slate-900 border-b border-gray-700/20 dark:border-gray-800 ${
            isFeatured ? "aspect-[21/9] sm:aspect-[2/1]" : "aspect-[16/10]"
          }`}
        >
          {!imageError ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#131322] to-[#07070B]">
              <Starburst className="w-10 h-10 text-[#C084FC] mb-2" />
              <p className="font-display font-bold text-white text-lg">{project.title}</p>
              <p className="text-xs text-[#9E9EB8]">{project.category}</p>
            </div>
          )}

          {/* Category Pill Tag Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide backdrop-blur-md shadow-md border flex items-center gap-1.5 ${
                isDark
                  ? "bg-[#07070B]/85 text-[#C084FC] border-[#8B5CF6]/40"
                  : "bg-white/95 text-[#7C3AED] border-[#7C3AED]/30"
              }`}
            >
              <Starburst className="w-3 h-3 text-[#8B5CF6]" animate={false} />
              <span>{project.badge}</span>
            </span>
          </div>

          {/* Status / Live Badge */}
          <div className="absolute top-4 right-4">
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105"
                title="Visit Live Application on Vercel"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Live on Vercel</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ) : (
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md border ${
                  isDark
                    ? "bg-[#07070B]/85 text-emerald-400 border-emerald-500/30"
                    : "bg-white/95 text-emerald-700 border-emerald-300"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-7 md:p-8">
          <div className="mb-3">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              {project.category}
            </span>
            <h3
              className={`text-xl sm:text-2xl md:text-3xl font-display font-extrabold mt-1 transition-colors leading-tight break-normal ${
                isDark ? "text-white group-hover:text-[#C084FC]" : "text-[#0F172A] group-hover:text-[#7C3AED]"
              }`}
            >
              {project.title}
            </h3>
          </div>

          <p
            className={`text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 ${
              isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
            }`}
          >
            {project.description}
          </p>

          {/* Key Features Preview */}
          <div className="mb-6 space-y-2">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 ${
                    isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                  }`}
                />
                <span className={`line-clamp-1 ${isDark ? "text-gray-300" : "text-gray-700 font-medium"}`}>
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-dashed border-gray-700/20 dark:border-gray-800">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-[#0E0E18] border-[#242338] text-[#9E9EB8]"
                    : "bg-slate-100 border-[#E4E4F2] text-[#475569]"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div
        className={`p-4 sm:p-6 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 ${
          isDark ? "bg-[#0E0E18]/80 border-[#242338]" : "bg-slate-50/80 border-[#E4E4F2]"
        }`}
      >
        <button
          onClick={() => onViewDetails(project)}
          type="button"
          className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border transition-all duration-300 hover:-translate-y-0.5 ${
            isDark
              ? "bg-[#131322] border-[#242338] text-white hover:border-[#8B5CF6] hover:text-[#C084FC]"
              : "bg-white border-[#E4E4F2] text-[#0F172A] hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-sm"
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold text-white transition-all duration-300 shadow-md hover:-translate-y-0.5 ${
              isDark
                ? "bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#EC4899] hover:shadow-glow-purple"
                : "bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:bg-[#6D28D9]"
            }`}
            title="Open Live Application on Vercel"
          >
            <span>Visit Live App</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#131322] border-[#242338] text-white hover:text-[#C084FC] hover:border-[#8B5CF6]"
                : "bg-white border-[#E4E4F2] text-[#0F172A] hover:text-[#7C3AED] shadow-sm"
            }`}
            title="Source Code"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
