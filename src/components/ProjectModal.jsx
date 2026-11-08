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
  Sparkles, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';

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
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 my-auto ${
            isDark
              ? "bg-[#0E0E18] border-[#242338] text-white shadow-black/80"
              : "bg-white border-[#E4E4F2] text-[#0F172A] shadow-2xl"
          }`}
        >
          {/* Sticky Header with Title and Close */}
          <div
            className={`sticky top-0 z-30 flex items-center justify-between p-4 sm:p-7 border-b backdrop-blur-xl ${
              isDark
                ? "bg-[#0E0E18]/90 border-[#242338]"
                : "bg-white/90 border-[#E4E4F2]"
            }`}
          >
            <div className="pr-3 max-w-[calc(100%-48px)]">
              <div className="flex items-center gap-2 mb-1">
                <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" animate={false} />
                <span
                  className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider ${
                    isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold tracking-tight break-normal">
                {project.fullTitle || project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className={`p-2 sm:p-2.5 rounded-2xl border transition-colors flex-shrink-0 ${
                isDark
                  ? "bg-[#131322] border-[#242338] text-[#9E9EB8] hover:text-white hover:border-[#8B5CF6]"
                  : "bg-slate-100 border-[#E4E4F2] text-[#64748B] hover:text-[#0F172A] hover:border-[#7C3AED]"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-9">
            
            {/* Visual Screenshot / Preview Banner */}
            <div className="rounded-3xl overflow-hidden border aspect-[16/9] w-full bg-slate-900 relative shadow-xl">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md border ${
                    isDark
                      ? "bg-[#07070B]/85 text-[#C084FC] border-[#8B5CF6]/40"
                      : "bg-white/95 text-[#7C3AED] border-[#7C3AED]/40 shadow-sm"
                  }`}
                >
                  Status: {project.status}
                </span>
              </div>
            </div>

            {/* Problem Statement & Core Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div
                className={`p-6 rounded-3xl border ${
                  isDark ? "bg-[#131322] border-[#242338]" : "bg-violet-50/40 border-violet-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-rose-500 font-display font-bold text-base">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problems Addressed</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#475569]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div
                className={`p-6 rounded-3xl border ${
                  isDark ? "bg-[#131322] border-[#242338]" : "bg-violet-50/40 border-violet-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-[#C084FC] font-display font-bold text-base">
                  <Target className="w-5 h-5 text-[#8B5CF6]" />
                  <span>Purpose &amp; Objectives</span>
                </div>
                <ul className="space-y-2">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Starburst className="w-3.5 h-3.5 text-[#8B5CF6] mt-0.5" animate={false} />
                      <span className={isDark ? "text-gray-300" : "text-gray-700 font-medium"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Project Overview */}
            <div>
              <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#8B5CF6]" />
                <span>Project Overview</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#475569]"}`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#EC4899]" />
                <span>Key Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-center gap-3 ${
                      isDark ? "bg-[#131322] border-[#242338]" : "bg-slate-50 border-[#E4E4F2]"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className={`text-xs sm:text-sm font-semibold ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Users & Role Breakdown */}
            {project.roles && project.roles.length > 0 && (
              <div>
                <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#38BDF8]" />
                  <span>Stakeholders &amp; Role-Based Access</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border ${
                        isDark ? "bg-[#131322] border-[#242338]" : "bg-slate-50 border-[#E4E4F2]"
                      }`}
                    >
                      <h4 className="text-sm font-bold font-heading mb-1 text-[#8B5CF6]">
                        {r.role}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                        {r.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Highlights */}
            <div
              className={`p-7 rounded-3xl border ${
                isDark ? "bg-[#131322] border-[#242338]" : "bg-violet-50/50 border-violet-200"
              }`}
            >
              <h3 className="text-lg font-display font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#C084FC]" />
                <span>Architecture &amp; Development Highlights</span>
              </h3>
              <p className={`text-xs sm:text-sm mb-4 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                {project.architecture}
              </p>

              <div className="space-y-2">
                {project.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm">
                    <Starburst className="w-3 h-3 text-[#8B5CF6]" animate={false} />
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider mb-3 text-gray-500">
                Applied Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3.5 py-1.5 rounded-xl border font-bold ${
                      isDark
                        ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                        : "bg-white border-[#E4E4F2] text-[#7C3AED] shadow-sm"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-gray-700/20 dark:border-gray-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md hover:shadow-glow-purple"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border ${
                    isDark
                      ? "bg-[#131322] border-[#242338] text-white hover:text-[#C084FC] hover:border-[#8B5CF6]"
                      : "bg-white border-[#E4E4F2] text-[#0F172A] hover:text-[#7C3AED]"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                type="button"
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border transition-colors ${
                  isDark
                    ? "bg-[#131322] border-[#242338] text-gray-300 hover:text-white"
                    : "bg-slate-100 border-[#E4E4F2] text-gray-700 hover:text-black"
                }`}
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
