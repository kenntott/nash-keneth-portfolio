import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Target, 
  AlertCircle, 
  Users, 
  Cpu, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ProjectModal = ({ project, onClose }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl z-10 my-auto ${
            isDark
              ? "bg-[#101010] border-[#262626] text-white shadow-black/90"
              : "bg-white border-[#E4E4E7] text-[#09090B] shadow-2xl"
          }`}
        >
          {/* Sticky Header with Title and Close */}
          <div
            className={`sticky top-0 z-30 flex items-center justify-between p-3.5 sm:p-6 border-b backdrop-blur-xl ${
              isDark
                ? "bg-[#101010]/95 border-[#262626]"
                : "bg-white/95 border-[#E4E4E7]"
            }`}
          >
            <div className="pr-3 max-w-[calc(100%-48px)]">
              <span
                className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#A78BFA]"
              >
                {project.category}
              </span>
              <h2 className="text-base sm:text-2xl font-display font-extrabold tracking-tight mt-0.5 break-words">
                {project.fullTitle || project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className={`p-2 rounded-full border transition-colors flex-shrink-0 ${
                isDark
                  ? "bg-[#141414] border-[#262626] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                  : "bg-[#F4F4F5] border-[#E4E4E7] text-[#71717A] hover:text-black hover:border-[#A1A1AA]"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            
            {/* Visual Screenshot Banner */}
            <div className="rounded-xl overflow-hidden border border-[#262626] aspect-[16/9] w-full bg-[#080808] relative">
              <img
                src={project.exploreImage || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border bg-[#080808]/85 text-white border-[#262626]"
                >
                  Status: {project.status}
                </span>
              </div>
            </div>

            {/* Problem Statement & Core Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div
                className={`p-5 rounded-xl border ${
                  isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2.5 text-red-400 font-display font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem Addressed</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2.5 text-[#A78BFA] font-display font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Key Objectives</span>
                </div>
                <ul className="space-y-2">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="text-[#A78BFA] mt-0.5">•</span>
                      <span className={isDark ? "text-[#D4D4D8]" : "text-[#3F3F46]"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Project Overview */}
            <div>
              <h3 className="text-base font-display font-bold mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A78BFA]" />
                <span>Project Overview</span>
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base font-display font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Key Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center gap-2.5 ${
                      isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                    <span className={`text-xs font-medium ${isDark ? "text-white" : "text-black"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Users & Role Breakdown */}
            {project.roles && project.roles.length > 0 && (
              <div>
                <h3 className="text-base font-display font-bold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#38BDF8]" />
                  <span>Stakeholders &amp; Roles</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                      }`}
                    >
                      <h4 className="text-xs font-bold font-mono uppercase mb-1 text-[#A78BFA]">
                        {r.role}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                        {r.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div
              className={`p-5 rounded-xl border ${
                isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
              }`}
            >
              <h3 className="text-sm font-display font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#A78BFA]" />
                <span>Architecture &amp; Engineering Highlights</span>
              </h3>
              <p className={`text-xs mb-3 font-mono ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                {project.architecture}
              </p>

              <div className="space-y-1.5">
                {project.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span className={isDark ? "text-[#D4D4D8]" : "text-[#3F3F46]"}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <p className="text-xs font-mono font-medium text-[#A1A1AA] uppercase tracking-wider mb-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3 py-1 rounded-md border ${
                      isDark
                        ? "bg-[#141414] border-[#262626] text-white"
                        : "bg-white border-[#E4E4E7] text-black"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-end gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-white text-black hover:bg-[#F4F4F5] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live App</span>
                </a>
              )}

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-colors ${
                    isDark
                      ? "bg-[#141414] border-[#262626] text-white hover:border-[#404040]"
                      : "bg-white border-[#E4E4E7] text-black hover:border-[#A1A1AA]"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                type="button"
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-colors ${
                  isDark
                    ? "bg-transparent border-[#262626] text-[#A1A1AA] hover:text-white"
                    : "bg-transparent border-[#E4E4E7] text-[#71717A] hover:text-black"
                }`}
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
